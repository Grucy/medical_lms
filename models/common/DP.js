const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DPSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    session_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Session",
    },
    matiere_id: {
      type: Schema.Types.ObjectId,
      ref: "Matiere",
    },
    item_id: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
    matieres_link: [
      {
        type: Schema.Types.ObjectId,
        ref: "Matiere",
      },
    ],
    items_link: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  {
    indexes: [
      { session_id: 1, matiere_id: 1, item_id: 1, dp_id: 1 },
    ]
  }
);

module.exports = mongoose.model("DP", DPSchema);
