const mongoose = require("mongoose");
const PlaylistModel = require("../../models/userData/Playlist");
const PlaylistQuestionModel = require("../../models/userData/Playlist_Question");

module.exports = {
  createPlaylist: async function (req, res) {
    const playlist = req.body;
    await PlaylistModel.create(playlist)
      .then(function (result) {
        res.status(200).json({
          message: "Playlist added successfully!!!",
          data: result,
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
    console.log(req.body);
    await PlaylistQuestionModel.create({ question_id, user_id, playlist_id })
      .then(function (result) {
        res.status(200).json({
          message: "Question added successfully!!!",
          data: result,
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
    let playlists = await PlaylistQuestionModel.find().populate("playlist_id");
    res.status(200).json({ message: null, data: playlists });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let playlists = await PlaylistModel.find(filter);
    res.status(200).json({ message: null, data: playlists });
  },
  getFilterWithQuestion: async function (req, res) {
    const filter = req.body;
    let playlists = await PlaylistQuestionModel.find(filter);
    // .populate("playlist_id");
    res.status(200).json({ message: null, data: playlists });
  },
  getFilterGetPlaylist: async function (req, res) {
    const filter = req.body;
    let playlists = await PlaylistQuestionModel.find(filter).populate(
      "playlist_id"
    );
    res.status(200).json({ message: null, data: playlists });
  },
  getQuestionsWithDetail: async function (req, res) {
    const { pageSize, pageNumber,searchText, user_id, matiere_id, playlist_id, item_id, sort } =
      req.body;
    const filter = { 
      user_id: new mongoose.Types.ObjectId(user_id),
      matiere_id: new mongoose.Types.ObjectId(matiere_id),
      item_id: new mongoose.Types.ObjectId(item_id),playlist_id: new mongoose.Types.ObjectId(playlist_id)
    };
    if (!user_id) delete filter.user_id;
    if (!matiere_id) delete filter.matiere_id;
    if (!item_id) delete filter.item_id;
    if (!playlist_id) delete filter.playlist_id;
    const pipeline = [
      { $match: filter }, // filter criteria
      { $group: { _id: "$question_id" } },
    ];
    const allQuestions = await PlaylistQuestionModel.aggregate(pipeline);
    console.log(allQuestions.length);
    const getPagePipeline = [
      { $match: filter }, // filter criteria
      { $group: { _id: "$question_id" } }, // group by question_id
      // { $sort: sort }, // sort like by createdAt in descending order
      { $skip: (parseInt(pageNumber) - 1) * parseInt(pageSize) }, // skip documents based on page number and page size
      { $limit: parseInt(pageSize) }, // limit the number of documents to retrieve per page
    ];
    PlaylistQuestionModel.aggregate(getPagePipeline)
      .then(function (questions) {
        res
          .status(200)
          .json({
            message: null,
            total_number: allQuestions.length,
            data: questions,
          });
      })
      .catch(function (err) {
        console.log(err);
        res.status(400).json({ message: "playlists not found", data: null });
      });
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
