const path = require("path");
const multer = require("multer");

//multer stuff
const storage = multer.diskStorage({
  destination: "./temp/",
  filename: (req, file, cb) => cb(null, file.originalname),
});

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png"
//   )
//     cb(null, true);
//   else cb(null, false);
// };

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
}).single("file");

module.exports = upload;
