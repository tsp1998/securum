const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const sha256 = require("sha256");
const morgan = require("morgan")

const jwt = require("jsonwebtoken");
const JWT_SECRET =
  process.env.NODE_ENV === "production"
    ? process.env.JWT_SECRET
    : require("./config/keys").JWT_SECRET;
const app = express();

app.use(morgan("dev"))
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "..", "build")))
app.use("/uploads", express.static("uploads"));

console.log("Waiting For Database Connection");
const MONGO_URL =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URL
    : require("./config/keys").MONGO_URL;
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) return console.log("Database connection error : " + err);
    else {
      console.log("Database Connection Success");
    }
  }
);

//routes and apis
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/blockchain", require("./routes/blockchainRoutes"));
app.use("/api/blocks", require("./routes/blockRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));

app.get("/api/fileSecret", (req, res, next) => {
  res.json({ token: jwt.sign("fileSecret", JWT_SECRET) });
});

// error handling middleware
app.use((error, req, res, next) => {
  const status = error.statusCode || 404;
  const message = error.message || "Something Went Wrong...";
  res.status(status).json({
    status: "error",
    message,
    error
  })
});

//root route
app.get("/", (req, res) => {
  res.json({ status: 200, message: "Welcome To SECURUM API" });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
  })
}

module.exports = app;
