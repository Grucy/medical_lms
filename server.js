const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

require("./config/db");
const matiereRouter = require("./routes/matiere");
const itemRouter = require("./routes/item");
const authRouter = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: false }));

app.get("/api", function (req, res) {
  res.json({ status: "Server Running ...." });
});

app.use("/api/auth", authRouter);
app.use("/api/matiere", matiereRouter);
app.use("/api/item", itemRouter);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server is running on port: ${port}`));
