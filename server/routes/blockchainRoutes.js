const express = require("express");
const router = express.Router();
const blockchainController = require("../controllers/blockchainController")

//middleware
const auth = require('../middleware/auth')

router.get("/", auth.verifyMiner, blockchainController.getBlockchain)
router.get("/all", auth.verifyMiner, blockchainController.getBlockchains)
router.post("/create", auth.verifyMiner, blockchainController.createBlockchain)
router.put("/update", auth.verifyMiner, blockchainController.updateBlockchain)

module.exports = router;
