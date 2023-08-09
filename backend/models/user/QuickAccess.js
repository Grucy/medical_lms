const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuickAccessSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  isMatiere: Boolean,
  isItem: Boolean,
  matiere_or_item_id: {
    type: Schema.Types.ObjectId,
    required: true,
    refpath: "MatiereOrItem",
  },
  MatiereOrItem: {
    type: String,
    required: true,
    enum: ["Matiere", "Item"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const QuickAccess = mongoose.model("QuickAccess", QuickAccessSchema);
module.exports = QuickAccess;
