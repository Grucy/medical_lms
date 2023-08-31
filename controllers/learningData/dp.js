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
    for (i = 0; i < dp.questions.length; i++) {
      let QuestionModel;
      switch (dp.questions[i].type) {
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
      console.log(error);
      if (error) break;
    }

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
    let dps = await DPModel.find()
      .populate("matieres")
      .populate("items")
      .populate("tags")
      .populate("session_id");
    res.status(200).json({ message: null, data: dps });
  },
  getByIdWithQuestions: async function (req, res) {
    let dps = await DPModel.findById(req.params.id)
      .populate("matieres")
      .populate("items")
      .populate("tags")
      .populate("session_id")
      .populate("questions");
    res.status(200).json({ message: null, data: dps });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let dps = await DPModel.find(filter).populate("matieres").populate("items");
    res.status(200).json({ message: null, data: dps });
  },
  getPage: async function (req, res) {
    const { pageSize, pageNumber, searchText, filter, sort } = req.body;
    const filterWithSearch = {
      ...filter,
      desc: { $regex: searchText, $options: "i" },
    };
    const total_number = await DPModel.countDocuments(filterWithSearch);
    DPModel.find(filterWithSearch)
      .sort(sort)
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .populate("matieres")
      .populate("items")
      .populate("tags")
      .populate("session_id")
      .then(function (dps) {
        res.status(200).json({
          message: "DPs found successfully",
          total_number: total_number,
          data: dps,
        });
      })
      .catch(function (err) {
        console.log(err);
        res.status(400).json({ message: "DPs not found", data: null });
      });
  },
  getById: function (req, res) {
    DPModel.findById(req.params.id)
      .populate("questions")
      .then(function (dp) {
        res.status(200).json({ message: null, data: dp });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "DP not found", data: null });
      });
  },
  updateById: async function (req, res) {
    const dp = req.body;
    const question_ids = [];
    let error;
    for (i = 0; i < dp.questions.length; i++) {
      let QuestionModel;
      switch (dp.questions[i].type) {
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
      if (dp.questions[i]._id)
        await QuestionModel.findByIdAndUpdate(
          dp.questions[i]._id,
          dp.questions[i]
        )
          .then((updatedQuestion) => {
            question_ids.push(updatedQuestion._id);
          })
          .catch((err) => {
            error = err;
          });
      else
        await QuestionModel.create(dp.questions[i])
          .then((newQuestion) => {
            question_ids.push(newQuestion._id);
          })
          .catch((err) => {
            error = err;
          });
      console.log(error);
      if (error) break;
    }

    dp.questions = question_ids;
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
