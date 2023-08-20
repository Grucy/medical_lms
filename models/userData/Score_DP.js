const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreDPSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dp_id: {
      type: Schema.Types.ObjectId,
      ref: "DP",
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
    success_rate: {
      excellent: Number,
      good: Number,
      average: Number,
      poor: Number,
    },
  },
  {
    indexes: [{ user_id: 1, dp_id: 1 }],
  }
);

module.exports = mongoose.model("Score_DP", ScoreDPSchema);
