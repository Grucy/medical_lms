const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question_number: {
    type: Number,
    required: true,
  },
  description: String,
  question: {
    type: String,
    required: true,
  },
  matiere_id: {
    type: Schema.Types.ObjectId,
    ref: 'Matiere',
  },
  item_id: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
  dp_id: {
    type: Schema.Types.ObjectId,
    ref: 'DP',
  },
  difficulty: Boolean,  // true means the rank A, false means the rank B
},{
  indexes: [
    { user_id: 1, matiere_id: 1, item_id: 1, dp_id: 1 },
  ]
});

const MultiChoiceSchema = new Schema({
  content: [{ choice: String, answer: Boolean }],
});

const TrueOrFalseSchema = new Schema({
  answer: {
    type: Boolean,
    required: true,
  },
});

const ShortAnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", QuestionSchema);
Question.discriminator("MultiChoice", MultiChoiceSchema);
Question.discriminator("TrueOrFalse", TrueOrFalseSchema);
Question.discriminator("ShortAnswer", ShortAnswerSchema);

module.exports = Question;
