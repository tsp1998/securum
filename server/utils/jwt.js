const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.NODE_ENV === "development" ?
  require("../config/keys").JWT_SECRET : process.env.JWT_SECRET
exports.generateAuthToken = async (user) => {
  const token = await jwt.sign({ user }, JWT_SECRET);
  return token;
};
