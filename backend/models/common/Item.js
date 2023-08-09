const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  item_number: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  matiere_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Matiere',
    required: true,
    index: true,
  },
  n_questions: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Item", ItemSchema);