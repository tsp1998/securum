const Blockchain = require("../models/Blockchain")

exports.getBlockchain = async (req, res, next) => {
  try {
    const blockchain = await Blockchain.findOne({ blockchainMiner: req.user._id }).exec()
    if (!blockchain) throw new Error("No Blockchain Found...")
    else res.json({ status: "success", blockchain })
  } catch (error) {
    next(error)
  }
}

exports.createBlockchain = async (req, res, next) => {
  try {
    const newBlockchain = new Blockchain(req.body.blockchain);
    newBlockchain.blockchainMiner = req.user._id;
    const blockchain = await newBlockchain.save();
    if (!blockchain) throw new Error("Error while creating Blockchain...")
    else {
      res.json({ status: "success", blockchain })
    }
  } catch (error) {
    next(error)
  }
}

exports.updateBlockchain = async (req, res, next) => {
  try {
    const { user: { _id }, body: { blockchainUpdateData } } = req;
    // const blockchain = await Blockchain.findOneAndUpdate({ blockchainMiner: _id }, blockchainUpdateData).exec();
    const blockchain = await Blockchain.findOne({ blockchainMiner: _id }).exec()
    if (blockchainUpdateData.pendingTransactions)
      blockchain.pendingTransactions = [...new Set([...blockchain.pendingTransactions, ...blockchainUpdateData.pendingTransactions])]
    if (blockchainUpdateData.networkMiners)
      blockchain.networkMiners = [...new Set([...blockchain.networkMiners, ...blockchainUpdateData.networkMiners])]
    if (blockchainUpdateData.chain)
      blockchain.chain = [...blockchain.chain, ...blockchainUpdateData.chain]
    const blockchainUpdated = await blockchain.save();
    if (!blockchainUpdated) throw new Error("Error while updating Blockchain...")
    else {
      res.json({ status: "success", blockchainUpdated })
    }
  } catch (error) {
    next(error)
  }
}