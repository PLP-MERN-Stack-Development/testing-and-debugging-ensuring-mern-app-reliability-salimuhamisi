const jwt = require("jsonwebtoken");

const SECRET = "testsecret123";

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};