const User = require("../models/User")

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).exec()
    if (!users) throw new Error("No Users Found")
    else res.json({ status: "success", users })
  } catch (error) {
    next(error)
  }
}