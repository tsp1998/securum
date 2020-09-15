const User = require("../models/User")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.NODE_ENV === "development" ?
  require("../config/keys").JWT_SECRET : process.env.JWT_SECRET

exports.signup = async (req, res, next) => {
  try {
    const newUser = new User(req.body.user);
    newUser.password = await newUser.encryptPassword(newUser.password)
    const user = await newUser.save()
    if (!user) throw new Error("User not Created");
    else {
      user.password = undefined;
      res.json({ status: "success", user })
    }
  } catch (error) {
    next(error)
  }
}

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body.user;
    let user = await User.findOne({ email })
    if (!user) throw new Error("User not Exist")
    else {
      const isPasswordsMatched = await user.verifyPassword(password, user.password);
      if (!isPasswordsMatched) throw new Error("Wrong Email or Password...");
      else {
        const token = await jwt.sign({ userId: user._id }, JWT_SECRET);
        if (!token) throw new Error("Something went Wrong...");
        else {
          const { _id, name, email, role } = user;
          res.json({ status: "success", token, user: { _id, name, email, role } })
        }
      }
    }
  } catch (error) {
    next(error)
  }
}