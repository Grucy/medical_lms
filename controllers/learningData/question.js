const mongoose = require("mongoose");
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
      // .populate("matiere_id")
      // .populate("item_id")
      // .populate("cards")
      // .populate("tags")
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
    const { matiere_id, item_id, n_questions, user_id, rang, tags, history } =
      req.body;
    const USER_ID = new mongoose.Types.ObjectId(user_id);
    const FILTER_BY = {};
    if (matiere_id)
      FILTER_BY.matiere_id = new mongoose.Types.ObjectId(matiere_id);
    if (item_id) FILTER_BY.item_id = new mongoose.Types.ObjectId(item_id);
    if (rang && rang !== "All") FILTER_BY.difficulty = rang === "A";
    if (tags && tags.length > 0)
      FILTER_BY.tags = {
        $in: tags.map((tag) => new mongoose.Types.ObjectId(tag)),
      };
    if (history && history !== "Both") FILTER_BY.tried = history === "Tried";
    const pipeline = [
      {
        $lookup: {
          from: "score_questions",
          let: { questionId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$user_id", USER_ID] },
                    { $eq: ["$question_id", "$$questionId"] },
                  ],
                },
              },
            },
          ],
          as: "score_question",
        },
      },
      {
        $addFields: {
          tried: {
            $cond: {
              if: { $gt: [{ $size: "$score_question" }, 0] },
              then: true,
              else: false,
            },
          },
        },
      },
      {
        $project: {
          score_question: 0,
        },
      },
      { $match: FILTER_BY },
      { $sample: { size: parseInt(n_questions) } },
      { $limit: parseInt(n_questions) },
      {
        $lookup: {
          from: "score_questions",
          let: { questionId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$user_id", USER_ID] },
                    { $eq: ["$question_id", "$$questionId"] },
                  ],
                },
              },
            },
          ],
          as: "score",
        },
      },
      {
        $unwind: {
          path: "$score",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags",
        },
      },
    ];
    Question.aggregate(pipeline)
      .then((result) => {
        res.status(200).json({ message: null, data: result });
      })
      .catch((error) => {
        console.error(error);
      });
  },
  count: function (req, res) {
    const { matiere_id, item_id, user_id, rang, tags, history } = req.body;
    const USER_ID = new mongoose.Types.ObjectId(user_id);
    const FILTER_BY = {};
    if (matiere_id)
      FILTER_BY.matiere_id = new mongoose.Types.ObjectId(matiere_id);
    if (item_id) FILTER_BY.item_id = new mongoose.Types.ObjectId(item_id);
    if (rang && rang !== "All") FILTER_BY.difficulty = rang === "A";
    if (tags && tags.length > 0)
      FILTER_BY.tags = {
        $in: tags.map((tag) => new mongoose.Types.ObjectId(tag)),
      };
    if (history && history !== "Both") FILTER_BY.tried = history === "Tried";
    const pipeline = [
      {
        $lookup: {
          from: "score_questions",
          let: { questionId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$user_id", USER_ID] },
                    { $eq: ["$question_id", "$$questionId"] },
                  ],
                },
              },
            },
          ],
          as: "score_question",
        },
      },
      {
        $addFields: {
          tried: {
            $cond: {
              if: { $gt: [{ $size: "$score_question" }, 0] },
              then: true,
              else: false,
            },
          },
        },
      },
      {
        $project: {
          score_question: 0,
        },
      },
      { $match: FILTER_BY },
    ];
    Question.aggregate(pipeline)
      .then((result) => {
        res.status(200).json({ message: null, data: result.length });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
