const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DPSchema = new Schema(
  {
   dp_number:{
    type: Number,
    default: 0,
   },
    desc: {
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
    tags: [{type: Schema.Types.ObjectId, ref: "Tag"}],
    questions: [{type: Schema.Types.ObjectId, ref: "Question"}],
    // matieres_link: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Matiere",
    //   },
    // ],
    // items_link: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Item",
    //   },
    // ],
  },
  {
    indexes: [
      { session_id: 1, matiere_id: 1, item_id: 1, dp_id: 1 },
    ]
  }
);


DPSchema.pre("save", async function (next) {
  console.log("increase corresponding Session n_dps by 1")
  if (this.session_id) {
    const SessionModel = require("./Session");
    const session = await SessionModel.findById(this.session_id);
    if (session) {
      session.n_dps += 1;
      session.n_questions += this.questions.length;
      await session.save();
    }
  }

  const Counter = require("./Counter");
  const counter = await Counter.findByIdAndUpdate(
    { _id: "DP" },
    { $inc: { seq: 1 } }
  );

  if (counter) {
    this.dp_number = counter.seq;
  }else{
    await Counter.create({
      _id:"DP",
      seq: 0
    })
  }

  next();
});

DPSchema.post("deleteOne", async function (next) {
  if (this.session_id) {
    const MatiereModel = require("./Matiere");
    const session = await MatiereModel.findById(this.session_id);
    if (session) {
      session.n_dps -= 1;
      session.n_questions -= this.questions.length;
      await session.save();
    }
  }
  next();
});

module.exports = mongoose.model("DP", DPSchema);
