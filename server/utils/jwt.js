const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
exports.generateAuthToken = async (user) => {
  const token = await jwt.sign({ user }, JWT_SECRET);
  return token;
};
