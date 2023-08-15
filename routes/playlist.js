const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user/playlist');

router.post("/", Controller.createPlaylist);
router.post("/question", Controller.addQuestion);
router.get("/", Controller.getAll);
router.get("/question", Controller.getAllWithQuestions);
router.post("/filter", Controller.getFilter);
router.post("/filterQuestion", Controller.getFilterWithQuestion);
router.get('/:id', Controller.getById);
router.put('/:id', Controller.updateById);
router.delete('/:id', Controller.deleteById);

module.exports = router;