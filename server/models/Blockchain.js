const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockchainSchema = new Schema(
  {
    chain: [
      {
        nonce: { type: Number, required: true },
        hash: { type: String, required: true },
        prevBlockHash: { type: String, required: true },
      }
    ],
    pendingTransactions: { type: Array, required: true, default: [] },
    blockchainMiner: { type: mongoose.Types.ObjectId, ref: "User", required: true, unique: true },
    networkMiners: { type: Array, required: true, default: [] }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blockchain", BlockchainSchema);
