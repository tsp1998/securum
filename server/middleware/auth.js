const JWT_SECRET = process.env.NODE_ENV === "development" ?
  require("../config/keys").JWT_SECRET : process.env.JWT_SECRET
const User = require("../models/User")
const jwt = require("jsonwebtoken");

exports.verifyUser = async (req, res, next) => {
  try {
    const headers = req.headers["x-access-token"] || req.headers["authorization"];
    if (!headers) throw new Error("Unauthorized Error: No Token Provided")
    else {
      const token = headers.split(" ")[1];
      if (!token) throw new Error("Unauthorized Error: No Token Provided")
      else {
        const decodedToken = await jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decodedToken.userId })
        if (!user) throw new Error("Unauthorized Error: Wrong User Id - Modified Token")
        else {
          user.password = undefined;
          req.user = user;
          next();
        }
      }
    }
  } catch (error) {
    next(error)
  }
};

exports.verifyAdmin = async (req, res, next) => {
  try {
    const headers = req.headers["x-access-token"] || req.headers["authorization"];
    if (!headers) throw new Error("Unauthorized Error: No Token Provided")
    else {
      const token = headers.split(" ")[1];
      if (!token) throw new Error("Unauthorized Error: No Token Provided")
      else {
        const decodedToken = await jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decodedToken.userId })
        if (!user) throw new Error("Unauthorized Error: Wrong User Id - Modified Token")
        else {
          if (user.role === 1) {
            user.password = undefined;
            req.user = user;
            next();
          }
          else throw new Error("Protected Routes Error: Admin Login Required")
        }
      }
    }
  } catch (error) {
    next(error)
  }
};

exports.verifyMiner = async (req, res, next) => {
  try {
    const headers = req.headers["x-access-token"] || req.headers["authorization"];
    if (!headers) throw new Error("Unauthorized Error: No Token Provided")
    else {
      const token = headers.split(" ")[1];
      if (!token) throw new Error("Unauthorized Error: No Token Provided")
      else {
        const decodedToken = await jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decodedToken.userId })
        if (!user) throw new Error("Unauthorized Error: Wrong User Id - Modified Token")
        else {
          if (user.role === 2) {
            user.password = undefined;
            req.user = user;
            next();
          }
          else throw new Error("Protected Routes Error: Miner Login Required")
        }
      }
    }
  } catch (error) {
    next(error)
  }
};