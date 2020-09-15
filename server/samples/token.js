const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.NODE_ENV === "development" ?
  require("../config/keys").JWT_SECRET : process.env.JWT_SECRET
const decrypt = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZWExODg1YzFjNjI1ZDEzNDhiZTI3N2UiLCJpYXQiOjE1ODc2NDc2Njl9.fLSwbUD4GDUd_VzIOREorANjZk1WTINg45Xgn9TrznA",
  jwtSecret
);

console.log(decrypt);
