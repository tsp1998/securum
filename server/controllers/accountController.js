const Account = require("../models/Account")
const Block = require("../models/Block")

exports.getAccount = async (req, res, next) => {
  try {
    const account = await Account.findOne({ userId: req.user._id }).exec()
    if (!account) throw new Error("No Account Found...")
    else {
      account.privateKey = undefined;
      res.json({ status: "success", account })
    }
  } catch (error) {
    next(error)
  }
}

exports.getAllAccountsPublicKeys = async (req, res, next) => {
  try {
    const allAccountsPublicKeys = await Account.find({}).select("publicKey").exec()
    if (!allAccountsPublicKeys) throw new Error("No Accounts Found...")
    else {
      res.json({ status: "success", allAccountsPublicKeys })
    }
  } catch (error) {
    next(error)
  }
}


exports.createAccount = async (req, res, next) => {
  try {
    let account = await Account.findOne({ userId: req.user._id }).exec();
    if (account) throw new Error("Account Already Exist...");
    else {
      const newAccount = new Account(req.body.account);
      newAccount.userId = req.user._id;
      account = await newAccount.save();
      if (!account) throw new Error("Error while creating Account...")
      else {
        account.privateKey = undefined;
        res.json({ status: "success", account })
      }
    }
  } catch (error) {
    next(error)
  }
}


exports.getAccountBalance = async (req, res, next) => {
  try {
    const { userPublicKey } = req.body.user;
    const blocks = await Block.find({
      $or: [
        { "transactions.recipient": userPublicKey },
        { "transactions.sender": userPublicKey }
      ]
    }).select("transactions").exec()
    if (!blocks) throw new Error("No Blocks Found...")
    else {
      let balance = 0;
      blocks.forEach(block => {
        block.transactions.forEach(transaction => {
          if (transaction.sender === userPublicKey) {
            balance -= transaction.amount + transaction.fee
          }
          if (transaction.recipient === userPublicKey) {
            balance += transaction.amount
          }
        })
      });
      res.json({ status: "success", balance })
    }
  } catch (error) {
    next(error)
  }
}