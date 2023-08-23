const mongoose = require('mongoose');
const {
  Question,
  MultiChoice,
  TrueOrFalse,
  ShortAnswer,
} = require("../../models/learningData/Question");

module.exports = {
  create: async function (req, res) {
    const question = req.body.question;
    const type = req.body.type;
    let QuestionModel;
    switch (type) {
      case "MultiChoice":
        console.log("MultiChoice");
        QuestionModel = MultiChoice;
        break;
      case "TrueOrFalse":
        QuestionModel = TrueOrFalse;
        console.log("TrueOrFalse");
        break;
      case "ShortAnswer":
        QuestionModel = ShortAnswer;
        console.log("ShortAnswer");
        break;
      default:
        QuestionModel = Question;
    }
    await QuestionModel.create(question)
      .then(function (result) {
        res.status(200).json({
          message: "Question added successfully!!!",
          data: result,
        });
      })
      .catch(function (err) {
        console.log(err);
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
    let questions = await Question.find()
      .populate("matiere_id")
      .populate("item_id")
      .populate("tags")
      .populate("cards");
    res.status(200).json({ message: null, data: questions });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    if (filter.type) {
      filter["__t"] = filter.type;
      delete filter.type;
    }
    let questions = await Question.find(filter);
    res.status(200).json({ message: null, data: questions });
  },
  getById: function (req, res) {
    Question.findById(req.params.id)
      .then(function (question) {
        res.status(200).json({ message: null, data: question });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "Question not found", data: null });
      });
  },
  updateById: function (req, res) {
    const question = req.body.question;
    const type = req.body.question.type;
    let QuestionModel;
    switch (type) {
      case "MultiChoice":
        QuestionModel = MultiChoice;
        break;
      case "TrueOrFalse":
        QuestionModel = TrueOrFalse;
        break;
      case "ShortAnswer":
        QuestionModel = ShortAnswer;
        break;
      default:
        QuestionModel = Question;
    }
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
    Question.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "Question deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
  getFilterRandom: function (req, res) {
    const { matiere_id, n_questions } = req.body;
    const pipeline = [
      {
        $match: {
          matiere_id: mongoose.Types.ObjectId(matiere_id)
        }
      },
      { $sample: { size: n_questions } },
      { $limit: n_questions },
    ];
    Question.aggregate(pipeline)
      .then((result) => {
        res.status(200).json({ message: null, data: result });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
