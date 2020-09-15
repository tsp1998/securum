const Blockchain = require("../models/Blockchain")

exports.getBlockchain = async (req, res, next) => {
  try {
    const query = {}
    query.blockchainMiner = req.params.blockchainMiner || req.user._id;
    const blockchain = await Blockchain.findOne(query).exec()
    if (!blockchain) throw new Error("No Blockchain Found...")
    else res.json({ status: "success", blockchain })
  } catch (error) {
    next(error)
  }
}

exports.getBlockchains = async (req, res, next) => {
  try {
    const blockchains = await Blockchain.find({}).exec()
    if (!blockchains) throw new Error("No Blockchains Found...")
    else res.json({ status: "success", blockchains })
  } catch (error) {
    next(error)
  }
}

exports.createBlockchain = async (req, res, next) => {
  try {
    let blockchain = await Blockchain.findOne({ blockchainMiner: req.user._id }).exec();
    if (blockchain) throw new Error("Error Blockchain Already Exist...");
    else {
      const initialBlockchain = {
        blockchainMiner: req.user._id,
        networkMiners: [],
        pendingTransactions: [],
        chain: [
          {
            nonce: 0,
            hash: "00000000000000000000",
            prevBlockHash: "00000000000000000000",
          }
        ]
      }
      const newBlockchain = new Blockchain(initialBlockchain);
      blockchain = await newBlockchain.save();
      if (!blockchain) throw new Error("Error while creating Blockchain...")
      else {
        res.json({ status: "success", blockchain })
      }
    }
  } catch (error) {
    next(error)
  }
}

exports.updateBlockchain = async (req, res, next) => {
  try {
    const { user: { _id }, body: { blockchainUpdateData } } = req;
    const blockchain = await Blockchain.findOne({ blockchainMiner: _id }).exec()
    if (!blockchain) throw new Error("No Blockchain Found to Update...")
    else {
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
    }
  } catch (error) {
    next(error)
  }
}