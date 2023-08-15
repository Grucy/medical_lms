const express = require("express");
const router = express.Router();
const Controller = require("../controllers/user/score_question");

router.post("/", Controller.checkAnswer);
router.get("/", Controller.getAll);
router.post("/getLastAssess", Controller.getOne);
// router.post("/filter", Controller.getFilter);
// router.get("/:id", Controller.getById);
// router.put("/:id", Controller.updateById);
// router.delete("/:id", Controller.deleteById);

module.exports = router;
