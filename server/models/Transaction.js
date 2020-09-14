const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    amount: { type: Number, required: true },
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    fee: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
