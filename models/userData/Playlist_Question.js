const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistQuestionSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  playlist_id: {
    type: Schema.Types.ObjectId,
    ref: "Playlist",
    required: true,
    index: true,
  },
  question_id: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true,
    index: true,
  },
});

module.exports = mongoose.model("Playlist_Question", PlaylistQuestionSchema);
