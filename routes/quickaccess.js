const express = require("express");
const router = express.Router();
const Controller = require("../controllers/user/quickAccess");
const Controller_sidebar = require("../controllers/user/sidebarQuickAccess");

router.get("/", Controller.getAll);
router.post("/", Controller.create);
router.delete("/:id", Controller.deleteById);
router.get("/sidebar/", Controller_sidebar.getAll);
router.post("/sidebar/", Controller_sidebar.create);
router.delete("/sidebar/:id", Controller_sidebar.deleteById);

module.exports = router;
