const MatiereModel = require("../../models/common/Matiere");
const ItemModel = require("../../models/common/Item");
const QuestionModel = require("../../models/common/Question");

module.exports = {
  create: async function (req, res) {
    const matiere = req.body;
    await MatiereModel.create(matiere)
      .then(function (result) {
        res.status(200).json({
          message: "Matiere added successfully!!!",
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
    let matieres = await MatiereModel.find();
    // console.log(matieres.length);
    // let matieresWithDetails = [];
    // for (i = 0; i < matieres.length; i++) {
    //   let items = await ItemModel.find({ matiereId: matieres[i]._id });
    //   let questions = await QuestionModel.find({ matiereId: matieres[i]._id});
    //   matieresWithDetails.push({
    //     _id: matieres[i]._id,
    //     name: matieres[i].name,
    //     n_items: items.length,
    //     n_questions: questions.length,
    //   });
    // }
    res.status(200).json({
      message: null,
      data: matieres,
    });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let matieres = await MatiereModel.find(filter);
    res.status(200).json({ message: null, data: matieres });
  },
  getById: function (req, res) {
    MatiereModel.findById(req.params.id)
      .then(function (matiere) {
        res.status(200).json({ message: null, data: matiere });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "Matiere not found", data: null });
      });
  },
  updateById: function (req, res) {
    const matiere = req.body;
    MatiereModel.findByIdAndUpdate(req.params.id, matiere)
      .then(function (matiere) {
        res
          .status(200)
          .json({ message: "Matiere updated successfully!", data: matiere });
      })
      .catch(function (err) {
        console.error(err);
        res.status(400).json({ message: "Update failed", data: null });
      });
  },
  deleteById: function (req, res) {
    console.log(req.params.id);
    MatiereModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "Matiere deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
};
