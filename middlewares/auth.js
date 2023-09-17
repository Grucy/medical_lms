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

const isAdmin = (req, res, next) => {
  user_id = req.body.userId;
  User.findById({ _id: user_id }).then((user) => {
    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).send({ succsss: false, message: "Require Admin Role!" });
      return;
    }
  }).catch((err) => {
    console.error(err);
    return res.status(403).send({ success: false, message: "User not found!" });
  });
};

module.exports = {
  verifyToken,
  isAdmin,
};
