const {
  Question,
  MultiChoice,
  TrueOrFalse,
  ShortAnswer,
} = require("../../models/learningData/Question");
const Score_Question = require("../../models/userData/Score_Question");

const compareAndSetScore = function (question, user_answer) {
  let score,
    total_score = 20;
  switch (question.__t) {
    case "MultiChoice":
      const discordance = question.answers
        .map(({ answer }, id) => {
          if (!answer === user_answer[id]) {
            return 1;
          } else {
            return 0;
          }
        })
        .reduce((acc, curr) => acc + curr, 0);
      if (discordance === 0) {
        score = 20;
      } else if (discordance === 1) {
        score = 10;
      } else if (discordance === 2) {
        score = 4;
      } else {
        score = 0;
      }
      break;
    case "TrueOrFalse":
      score = user_answer === question.answer ? 20 : 0;
      break;
    case "ShortAnswer":
      const correctAnswers = user_answer.filter((answer) =>
        question.answers.includes(answer)
      ).length;
      score = Math.round((correctAnswers / question.answers.length) * 20);
      break;
    default:
      score = 0;
      break;
  }
  return { score, total_score };
};

module.exports = {
  getAll: async function (req, res) {
    let progressData = await Score_Question.find();
    res.status(200).json({ message: null, data: progressData });
  },
  getOne: async function (req, res) {
    const { user_id, question_id } = req.body;
    let lastAccess = await Score_Question.findOne({ user_id, question_id });
    res.status(200).json({ message: null, data: lastAccess });
  },
  checkAnswer: async function (req, res) {
    const user_id = req.body.user_id;
    const { question_id, type } = req.body.question;
    const user_answer = req.body.answer;
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
    let question = await Question.findById(question_id).populate("cards");
    // .populate("Matiere")
    // .populate("Item")
    // .populate("DP")
    // .exec();
    const { total_score, score } = compareAndSetScore(question, user_answer);
    await Score_Question.findOneAndUpdate(
      {
        user_id,
        question_id: question._id,
      },
      {
        user_id,
        matiere_id: question.matiere_id,
        item_id: question.item_id,
        dp_id: question.dp_id,
        question_id: question._id,
        user_score: score,
        total_score,
      },
      { upsert: true, new: true }
    )
      .then(function (result) {
        res.status(200).json({
          message: "Your answer was submitted successfully!",
          data: { score, question },
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
};
