const DPModel = require("../../models/learningData/DP");
const {
  Question,
  MultiChoice,
  TrueOrFalse,
  ShortAnswer,
} = require("../../models/learningData/Question");

module.exports = {
  create: async function (req, res) {
    const dp = req.body;
    const question_ids = [];
    let error;
    for(i=0; i< dp.questions.length; i++) {
      let QuestionModel;
      switch (dp.questions[i].type) {
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
      await QuestionModel.create(dp.questions[i])
        .then((newQuestion) => {
          question_ids.push(newQuestion._id);
        })
        .catch((err) => {
          error = err;
          // if (err.errors) {
          //   res
          //     .status(400)
          //     .json({ message: "Require data", errors: err.errors });
          // } else {
          //   res
          //     .status(500)
          //     .json({ message: "Internal server error", data: null });
          // }
        });
        console.log(error)
        if(error) break;
    };

    dp.questions = question_ids;
    await DPModel.create(dp)
      .then(function (result) {
        res.status(200).json({
          message: "DP added successfully!!!",
          data: result,
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
    let dps = await DPModel.find().populate("matieres").populate("items").populate("tags").populate("session_id");
    res.status(200).json({ message: null, data: dps });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let dps = await DPModel.find(filter).populate("matieres").populate("items");
    res.status(200).json({ message: null, data: dps });
  },
  getById: function (req, res) {
    DPModel.findById(req.params.id)
      .then(function (dp) {
        res.status(200).json({ message: null, data: dp });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "DP not found", data: null });
      });
  },
  updateById: function (req, res) {
    const dp = req.body;
    DPModel.findByIdAndUpdate(req.params.id, dp)
      .then(function (dp) {
        res.status(200).json({ message: "DP updated successfully!", data: dp });
      })
      .catch(function (err) {
        console.error(err);
        res.status(400).json({ message: "Update failed", data: null });
      });
  },
  deleteById: function (req, res) {
    console.log(req.params.id);
    DPModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "DP deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
};
