const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const UserSchema = new Schema(
  {
    name: { type: String, trim: true, required: true, maxlength: 32 },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0 }, // type user: 0, miner: 2, admin: 1
    bio: { type: String, default: "", maxlength: 200 },
    status: { type: Number, default: 0 } //approval status 0: not approved, 1: approved
  },
  {
    timestamps: true,
  }
);

UserSchema.methods = {
  encryptPassword: async (password) => {
    if (!password) return "";
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    } catch (error) {
      return ""
    }
  },
  verifyPassword: async (password, dbPassword) => {
    try {
      const matched = await bcrypt.compare(password, dbPassword)
      return matched;
    } catch (error) {
      return new Error("Wrong email or password...")
    }
  }
}

module.exports = mongoose.model("User", UserSchema);
