const jwt = require("jsonwebtoken");
const User = require("../models/auth/User");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized!",
      });
    }
    next();
  });
};

module.exports = {
  verifyToken,
  isAdmin,
};
