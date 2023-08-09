const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatiereSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image_id: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
  n_items: {
    type: Number,
    default: 0,
    required: true,
  },
  n_questions: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Matiere", MatiereSchema);
