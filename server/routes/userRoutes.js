const express = require("express");
const router = express.Router();

//middleware
const auth = require('../middleware/auth')

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.get("/", auth.verifyAdmin, userController.getUsers)
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);

module.exports = router;
