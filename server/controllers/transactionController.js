const Transaction = require("../models/Transaction")

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({}).exec()
    if (!transactions) throw new Error("No Transactions Found...")
    else res.json({ status: "success", transactions })
  } catch (error) {
    next(error)
  }
}

exports.createTransaction = async (req, res, next) => {
  try {
    const newTransaction = new Transaction(req.body.transaction);
    const transaction = await newTransaction.save();
    if (!transaction) throw new Error("Error while creating Transaction...")
    else {
      res.json({ status: "success", transaction })
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