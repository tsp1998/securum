const Block = require("../models/Block")

exports.getBlocks = async (req, res, next) => {
  try {
    const blocks = await Block.find({}).exec()
    if (!blocks) throw new Error("No Blocks Found...")
    else res.json({ status: "success", blocks })
  } catch (error) {
    next(error)
  }
}

exports.getBlock = async (req, res, next) => {
  try {
    const blockHash = req.params.blockHash;
    const block = await Block.findOne({ hash: blockHash }).exec()
    if (!block) throw new Error("Block Not Found...")
    else {
      res.json({ status: "success", block })
    }
  } catch (error) {
    next(error)
  }
}

exports.createBlock = async (req, res, next) => {
  try {
    const newBlock = new Block(req.body.block);
    if (!newBlock.index) {
      let blocksCount = await Block.count({});
      newBlock.index = blocksCount + 1 || 1;
    }
    const block = await newBlock.save();
    if (!block) throw new Error("Error while creating Block...")
    else {
      res.json({ status: "success", block })
    }
  } catch (error) {
    next(error)
  }
}