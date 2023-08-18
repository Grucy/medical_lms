const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user/playlist');

router.get("/", Controller.getAll);
router.post("/", Controller.createPlaylist);
router.post("/filter", Controller.getFilter);
router.get('/:id', Controller.getById);
router.put('/:id', Controller.updateById);
router.delete('/:id', Controller.deleteById);
router.get("/question", Controller.getAllWithQuestions);
router.post("/question", Controller.addQuestion);
router.post("/filterQuestion", Controller.getFilterWithQuestion);
router.post("/filterAndGetPlaylist", Controller.getFilterGetPlaylist);
router.post("/getQuestionsWithDetail", Controller.getQuestionsWithDetail);
router.delete('/question/:id', Controller.deleteQuestionFromPlaylist);

module.exports = router;