const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    question_number: {
      type: Number,
    },
    desc: String,
    question: {
      type: String,
      required: true,
    },
    matiere_id: {
      type: Schema.Types.ObjectId,
      ref: "Matiere",
      // required: true,
    },
    item_id: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      // required: true,
    },
    dp_id: {
      type: Schema.Types.ObjectId,
      ref: "DP",
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    comment: {
      type: String,
      required: true,
    },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
    difficulty: { type: Boolean, required: true, default: true }, // true means the rank A, false means the rank B
  },
  {
    indexes: [{ matiere_id: 1, item_id: 1, dp_id: 1 }],
  }
);

const MultiChoiceSchema = new Schema({
  answers: [{ choice: String, desc: String, answer: Boolean }],
});

const TrueOrFalseSchema = new Schema({
  answer: {
    type: Boolean,
    required: true,
  },
});

const ShortAnswerSchema = new Schema({
  answers: [
    {
      type: String,
    },
  ],
});

QuestionSchema.pre("save", async function (next) {
  if (this.matiere_id) {
    const MatiereModel = require("./Matiere");
    const matiere = await MatiereModel.findById(this.matiere_id);
    if (matiere) {
      matiere.n_questions += 1;
      await matiere.save();
    }
  }
  if (this.item_id) {
    const ItemModel = require("./Item");
    const item = await ItemModel.findById(this.item_id);
    if (item) {
      item.n_questions += 1;
      await item.save();
    }
  }
  const counter = await Counter.findByIdAndUpdate(
    { _id: "Question" },
    { $inc: { seq: 1 } }
  );
  if (counter) {
    this.question_number = counter.seq;
  }
  next();
});

QuestionSchema.post("deleteOne", async function (next) {
  if (this.matiere_id) {
    const MatiereModel = require("./Matiere");
    const matiere = await MatiereModel.findById(this.matiere_id);
    if (matiere) {
      matiere.n_questions -= 1;
      await matiere.save();
    }
  }
  if (this.item_id) {
    const ItemModel = require("./Item");
    const item = await ItemModel.findById(this.item_id);
    if (item) {
      item.n_questions -= 1;
      await item.save();
    }
  }
  if (this.dp_id) {
    const DPModel = require("./DP");
    const dp = await DPModel.findById(this.dp_id);
    if (dp) {
      dp.n_questions -= 1;
      await dp.save();
    }
  }
  next();
});

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
const Counter = mongoose.model("Counter", CounterSchema);

const Question = mongoose.model("Question", QuestionSchema);
const MultiChoice = Question.discriminator("MultiChoice", MultiChoiceSchema);
const TrueOrFalse = Question.discriminator("TrueOrFalse", TrueOrFalseSchema);
const ShortAnswer = Question.discriminator("ShortAnswer", ShortAnswerSchema);

module.exports = { Question, MultiChoice, TrueOrFalse, ShortAnswer, Counter };
