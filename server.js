const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

require("./config/db");
const { verifyToken } = require("./middlewares/auth");

const authRouter = require("./routes/auth");
const matiereRouter = require("./routes/matiere");
const itemRouter = require("./routes/item");
const sessionRouter = require("./routes/session");
const tagRouter = require("./routes/tag");
const questionRouter = require("./routes/question");
const dpRouter = require("./routes/dp");
const answerRouter = require("./routes/answer");
const progressRouter = require("./routes/progress");
const cardRouter = require("./routes/card");
const playlistRouter = require("./routes/playlist");
const quickAccessRouter = require("./routes/quickaccess");
const statusRouter = require("./routes/status");
const reportRouter = require("./routes/report");
const scheduleRouter = require("./routes/schedule");

app.use(express.json({ limit: 10000000 }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: false }));

app.get("/api", function (req, res) {
  res.json({ status: "Server Running ...." });
});

app.use("/api/auth", authRouter);

app.use("/api/matiere", verifyToken, matiereRouter);
app.use("/api/item", verifyToken, itemRouter);
app.use("/api/status", verifyToken, statusRouter);
app.use("/api/report", verifyToken, reportRouter);
app.use("/api/session", verifyToken, sessionRouter);
app.use("/api/tag", verifyToken, tagRouter);
app.use("/api/question", verifyToken, questionRouter);
app.use("/api/dp", verifyToken, dpRouter);
app.use("/api/card",  verifyToken,cardRouter);
app.use("/api/playlist", verifyToken, playlistRouter);
app.use("/api/quickaccess", verifyToken, quickAccessRouter);
app.use("/api/answer", verifyToken, answerRouter);
app.use("/api/progress", verifyToken, progressRouter);
app.use("/api/schedule", verifyToken, scheduleRouter);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server is running on port: ${port}`));
