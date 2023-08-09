const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgressItemSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    matiere_id: {
      type: Schema.Types.ObjectId,
      ref: "Matiere",
    },
    progress_rate: {
      type: Number,
      required: true,
    },
    success_rate: {
      excellent: Number,
      good: Number,
      average: Number,
      poor: Number,
    },
  },
  {
    indexes: [{ user_id: 1, item_id: 1 }],
  }
);

module.exports = mongoose.model("Progress", ProgressItemSchema);
