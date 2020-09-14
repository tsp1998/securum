const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController")

//middleware
const auth = require('../middleware/auth')

router.get("/", auth.verifyUser, transactionController.getTransactions)
router.post("/create", auth.verifyUser, transactionController.createTransaction)
router.delete("/:transactionId", auth.verifyMiner, transactionController.deleteTransaction)

module.exports = router;
