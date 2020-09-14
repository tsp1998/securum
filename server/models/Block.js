const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema(
  {
    index: { type: Number, required: true },
    nonce: { type: Number, required: true },
    hash: { type: String, required: true },
    prevBlockHash: { type: String, required: true },
    transactions: { type: Array, required: true, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Block", BlockSchema);
