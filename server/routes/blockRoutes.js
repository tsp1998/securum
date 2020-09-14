const express = require("express");
const router = express.Router();
const blockController = require("../controllers/blockController")

//middleware
const auth = require('../middleware/auth')

router.get("/", auth.verifyMiner, blockController.getBlocks)
router.post("/create", auth.verifyMiner, blockController.createBlock)

module.exports = router;
