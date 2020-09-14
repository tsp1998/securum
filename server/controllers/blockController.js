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

exports.createBlock = async (req, res, next) => {
  try {
    let blocksCount = await Block.count({});
    const newBlock = new Block(req.body.block);
    newBlock.index = blocksCount + 1 || 1;
    const block = await newBlock.save();
    if (!block) throw new Error("Error while creating Block...")
    else {
      res.json({ status: "success", block })
    }
  } catch (error) {
    next(error)
  }
}