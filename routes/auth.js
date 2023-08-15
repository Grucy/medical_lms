const express = require("express");
const router = express.Router();

const Controller = require("../controllers/auth");
const { verifyToken, isAdmin } = require("../middlewares/auth");
const { checkDuplicateEmail } = require("../middlewares/validator");

router.post("/signup", checkDuplicateEmail, Controller.signup);
router.post("/signin", Controller.signin);
router.get("/refresh", verifyToken, Controller.refresh);
router.post("/", [verifyToken, isAdmin], Controller.getAll);

module.exports = router;
