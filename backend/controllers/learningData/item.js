const ItemModel = require("../../models/common/Item");

module.exports = {
  create: async function (req, res) {
    const item = req.body;
    await ItemModel.create(item)
      .then(function (result) {
        res.status(200).json({
          message: "Item added successfully!!!",
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
    let matieres = await ItemModel.find();
    res.status(200).json({ message: null, data: matieres });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let matieres = await ItemModel.find(filter);
    res.status(200).json({ message: null, data: matieres });
  },
  getById: function (req, res) {
    ItemModel.findById(req.params.id)
      .then(function (item) {
        res.status(200).json({ message: null, data: item });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "Item not found", data: null });
      });
  },
  updateById: function (req, res) {
    const item = req.body;
    ItemModel.findByIdAndUpdate(req.params.id, item)
      .then(function (item) {
        res
          .status(200)
          .json({ message: "Item updated successfully!", data: item });
      })
      .catch(function (err) {
        console.error(err);
        res.status(400).json({ message: "Update failed", data: null });
      });
  },
  deleteById: function (req, res) {
    console.log(req.params.id);
    ItemModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "Item deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
};
