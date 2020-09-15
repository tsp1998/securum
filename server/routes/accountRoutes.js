const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController")

//middleware
const auth = require('../middleware/auth')

router.get("/", auth.verifyUser, accountController.getAccount)
router.get("/getAllAccountsPublicKeys", auth.verifyUser, accountController.getAllAccountsPublicKeys)
router.post("/create", auth.verifyUser, accountController.createAccount)
router.post("/getAccountBalance", auth.verifyUser, accountController.getAccountBalance)

module.exports = router;
