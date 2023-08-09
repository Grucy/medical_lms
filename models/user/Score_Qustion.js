const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
  question_id: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  user_score: {
    type: Number,
    required: true,
  },
  total_score: {
    type: Number,
    required: true,
  },
  last_access: {
    type: Date,
    default: Date.now,
  },
},{
    indexes: [
      { user_id: 1, matiere_id: 1, item_id: 1, dp_id: 1 },
    ]
});

module.exports = mongoose.model("Progress", ScoreQuestionSchema);
