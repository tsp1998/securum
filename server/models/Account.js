const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    publicKey: { type: String, required: true },
    privateKey: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Account", AccountSchema);
