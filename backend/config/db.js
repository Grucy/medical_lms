const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log(`mongoDB connected successfully`);
  // initial();
});

connection.on("error", (err) => {
  console.log(`mongoDB connection failed`);
  console.error(err);
  process.exit();
});

function initial() {
  const User = require("../models/auth/User");
  const bcrypt = require("bcryptjs");
  const admin = {
    email: process.env.adminEmail,
    password: bcrypt.hashSync(process.env.adminPassword, 8),
    role: "admin",
  };
  User.create(admin)
    .then(() => {
      console.log(`admin user created`);
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    });
}

module.exports = connection;
