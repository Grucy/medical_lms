const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/medicalLms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log(`mongoDB connected successfully`);
  initial();
});

connection.on("error", (err) => {
  console.log(`mongoDB connection failed`);
  console.error(err);
  process.exit();
});

async function initial() {
  const User = require("../models/auth/User");
  const { Counter } = require("../models/learningData/Question");
  const bcrypt = require("bcryptjs");
  const admin = {
    email: process.env.adminEmail,
    password: bcrypt.hashSync(process.env.adminPassword, 8),
    role: "admin",
  };
  await User.deleteMany({ role: "admin" });
  await User.create(admin)
  await Counter.findOneAndDelete({ _id: "Question"});
  await Counter.create({ _id: "Question", seq: 1 });
}

module.exports = connection;
