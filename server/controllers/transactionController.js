const Transaction = require("../models/Transaction")
const Account = require("../models/Account")

exports.getTransactions = async (req, res, next) => {
  try {
    let transactions;
    if (req.user.role === 0) {
      const account = await Account.findOne({ userId: req.user._id }).exec();
      const { publicKey } = account;
      transactions = await Transaction.find({ $or: [{ sender: publicKey }, { recipient: publicKey }] })
        .sort({ createdAt: -1 }).exec()
    } else transactions = await Transaction.find({}).sort({ createdAt: -1 }).exec()
    if (!transactions) throw new Error("No Transactions Found...")
    else res.json({ status: "success", transactions })
  } catch (error) {
    next(error)
  }
}

exports.createTransaction = async (req, res, next) => {
  try {
    let account = await Account.findOne({ userId: req.user._id }).exec();
    if (!account) throw new Error("No account exist with this user...")
    else {
      const { publicKey: recipient, privateKey, amount, fee } = req.body.transaction;
      if (privateKey === account.privateKey || privateKey === "0") {
        const sender = privateKey === "0" ? "0" : account.publicKey;
        account = await Account.findOne({ publicKey: recipient }).exec();
        if (!account) throw new Error("Invalid Recipient Public Key...")
        else {
          const newTransaction = new Transaction({ recipient, amount, fee, sender })
          const transaction = await newTransaction.save();
          if (!transaction) throw new Error("Error while creating Transaction...")
          else {
            res.json({ status: "success", transaction })
          }
        }
      } else throw new Error("Private Key Invalid...")
    }
  } catch (error) {
    next(error)
  }
}

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transactionDeleted = await Transaction.findOneAndDelete({ _id: req.params.transactionId })
    if (!transactionDeleted) throw new Error("Error while Transaction Delete...")
    else {
      res.json({ status: "success", transactionDeleted })
    }
  } catch (error) {
    next(error)
  }
}

exports.updateTransactions = async (req, res, next) => {
  try {
    const failedTransactionUpdates = [];
    const transactionsIds = req.body.transactionsIds
    if (transactionsIds && transactionsIds.length) {
      transactionsIds.forEach(async transactionId => {
        const transaction = await Transaction.findOne({ _id: transactionId }).exec();
        if (!transaction) failedTransactionUpdates.push(transactionId)
        else {
          transaction.status = 1;
          const t = await transaction.save();
          if (!t) failedTransactionUpdates.push(transactionId)
        }
      });
      res.json({ status: "success", failedTransactionUpdates: [new Set(failedTransactionUpdates)] })
    } else throw new Error("No Transaction Ids Found...")
  } catch (error) {
    next(error)
  }
}