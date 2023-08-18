const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProcessMatiereModel = require("./Progress_Matiere");
const ProcessItemModel = require("./Progress_Item");

const ScoreQuestionSchema = new Schema(
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
    item_id: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
    dp_id: {
      type: Schema.Types.ObjectId,
      ref: "DP",
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
      required: true,
      default: Date.now,
    },
  },
  {
    indexes: [{ user_id: 1, matiere_id: 1, item_id: 1, dp_id: 1 }],
  }
);


ScoreQuestionSchema.pre("findOneAndUpdate", function (next) {
  console.log("timestamp");
  this._update.last_access = Date.now();
  next();
});

ScoreQuestionSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.matiere_id) {
    const matiereProgress = await ProcessMatiereModel.findOneAndUpdate({
      user_id: this._update.user_id,
      matiere_id: this._update.matiere_id,
    });
    if (matiereProgress) {
      matiereProgress.progress_rate += 1;
      if (this._update.user_score === 20) {
        matiereProgress.success_rate.excellent += 1;
      } else if (this._update.user_score >= 10) {
        matiereProgress.success_rate.good += 1;
      } else if (this._update.user_score >= 5) {
        matiereProgress.success_rate.average += 1;
      } else {
        matiereProgress.success_rate.poor += 1;
      }
      await matiereProgress.save();
    } else {
      const newMatiereProgress = new ProcessMatiereModel({
        user_id: this._update.user_id,
        matiere_id: this._update.matiere_id,
        progress_rate: 1,
        success_rate: {
          excellent: this._update.user_score === 20 ? 1 : 0,
          good: this._update.user_score >= 10 && this._update.user_score < 20 ? 1 : 0,
          average: this._update.user_score >= 5 && this._update.user_score < 10 ? 1 : 0,
          poor: this._update.user_score < 5 ? 1 : 0,
        },
      });
      await newMatiereProgress.save();
    }
  }
  if (this._update.item_id) {
    const itemProgress = await ProcessItemModel.findOne({
      user_id: this._update.user_id,
      item_id: this._update.item_id,
    });
    if (itemProgress) {
      itemProgress.progress_rate += 1;
      if (this._update.user_score === 20) {
        itemProgress.success_rate.excellent += 1;
      } else if (this._update.user_score >= 10) {
        itemProgress.success_rate.good += 1;
      } else if (this._update.user_score >= 5) {
        itemProgress.success_rate.average += 1;
      } else {
        itemProgress.success_rate.poor += 1;
      }
      await itemProgress.save();
    } else {
      const newItemProgress = new ProcessItemModel({
        user_id: this._update.user_id,
        item_id: this._update.item_id,
        progress_rate: 1,
        success_rate: {
          excellent: this._update.user_score === 20 ? 1 : 0,
          good: this._update.user_score >= 10 && this._update.user_score < 20 ? 1 : 0,
          average: this._update.user_score >= 5 && this._update.user_score < 10 ? 1 : 0,
          poor: this._update.user_score < 5 ? 1 : 0,
        },
      });
      await newItemProgress.save();
    }
  }
  next();
});

module.exports = mongoose.model("Score_Question", ScoreQuestionSchema);
