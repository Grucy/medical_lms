const PlaylistModel = require("../../models/userData/Playlist");
const PlaylistQuestionModel = require("../../models/userData/Playlist_Question");

module.exports = {
  createPlaylist: async function (req, res) {
    const playlist = req.body;
    await PlaylistModel.create(playlist)
      .then(function (result) {
        res.status(200).json({
          message: "Playlist added successfully!!!",
          data: { id: result._id },
        });
      })
      .catch(function (err) {
        if (err.errors) {
          res.status(400).json({ message: "Require data", errors: err.errors });
        } else {
          res
            .status(500)
            .json({ message: "Internal server error", data: null });
        }
      });
  },
  addQuestion: async function (req, res) {
    const { question_id, user_id, playlist_id } = req.body;
    await PlaylistQuestionModel.create({ question_id, user_id, playlist_id })
      .then(function (result) {
        res.status(200).json({
          message: "Question added successfully!!!",
          data: { id: result._id },
        });
      })
      .catch(function (err) {
        if (err.errors) {
          res.status(400).json({ message: "Require data", errors: err.errors });
        } else {
          res
            .status(500)
            .json({ message: "Internal server error", data: null });
        }
      });
  },
  getAll: async function (req, res) {
    let playlists = await PlaylistModel.find();
    res.status(200).json({ message: null, data: playlists });
  },
  getAllWithQuestions: async function (req, res) {
    let playlists = await PlaylistQuestionModel.find();
    res.status(200).json({ message: null, data: playlists });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let playlists = await PlaylistModel.find(filter);
    res.status(200).json({ message: null, data: playlists });
  },
  getFilterWithQuestion: async function (req, res) {
    const filter = req.body;
    let playlists = await PlaylistQuestionModel.find(filter)
    .populate("playlist_id");
    res.status(200).json({ message: null, data: playlists });
  },
  getById: function (req, res) {
    PlaylistModel.findById(req.params.id)
      .then(function (playlist) {
        res.status(200).json({ message: null, data: playlist });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "Playlist not found", data: null });
      });
  },
  getByIdWithQuestion: function (req, res) {
    PlaylistQuestionModel.findById(req.params.id)
      .then(function (playlist) {
        res.status(200).json({ message: null, data: playlist });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "Playlist not found", data: null });
      });
  },
  updateById: function (req, res) {
    const playlist = req.body;
    PlaylistModel.findByIdAndUpdate(req.params.id, playlist)
      .then(function (playlist) {
        res
          .status(200)
          .json({ message: "Playlist updated successfully!", data: playlist });
      })
      .catch(function (err) {
        console.error(err);
        res.status(400).json({ message: "Update failed", data: null });
      });
  },
  deleteById: function (req, res) {
    console.log(req.params.id);
    PlaylistModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "Playlist deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
  deleteQuestionFromPlaylist: function (req, res) {
    console.log(req.params.id);
    PlaylistQuestionModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "Playlist deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
};
