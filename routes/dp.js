const express = require('express');
const router = express.Router();
const Controller = require('../controllers/learningData/dp');

router.post("/", Controller.create);
router.get("/", Controller.getAll);
router.post("/filter", Controller.getFilter);
router.post("/getPage", Controller.getPage);
router.get('/:id', Controller.getById);
router.get('/withDetails/:id', Controller.getByIdWithQuestions);
router.put('/:id', Controller.updateById);
router.delete('/:id', Controller.deleteById);

module.exports = router;