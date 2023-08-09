const QuestionModel = require("../../models/leaningData/Question");

module.exports = {
  create: async function (req, res) {
    const question = req.body;
    await QuestionModel.create(question)
      .then(function (result) {
        res.status(200).json({
          message: "Question added successfully!!!",
          data: { id: result._id },
        });
      })
      .catch(function (err) {
        if (err.errors) {
          res.status(400).json({ message: "Require data", errors: err.errors });
        } else {
          res
            .status(500)
            .json({ message: "Internal server error", data: null });
        }
      });
  },
  getAll: async function (req, res) {
    let questions = await QuestionModel.find();
    res.status(200).json({ message: null, data: questions });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let questions = await QuestionModel.find(filter);
    res.status(200).json({ message: null, data: questions });
  },
  getById: function (req, res) {
    QuestionModel.findById(req.params.id)
      .then(function (question) {
        res.status(200).json({ message: null, data: question });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "Question not found", data: null });
      });
  },
  updateById: function (req, res) {
    const question = req.body;
    QuestionModel.findByIdAndUpdate(req.params.id, question)
      .then(function (question) {
        res
          .status(200)
          .json({ message: "Question updated successfully!", data: question });
      })
      .catch(function (err) {
        console.error(err);
        res.status(400).json({ message: "Update failed", data: null });
      });
  },
  deleteById: function (req, res) {
    console.log(req.params.id);
    QuestionModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "Question deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
};
