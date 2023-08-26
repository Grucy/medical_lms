const ItemModel = require("../../models/learningData/Item");

module.exports = {
  count: async function (req, res) {
    await ItemModel.count()
      .then(function (count) {
        res.status(200).json({
          message: "Success",
          data: count,
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
    let items = await ItemModel.find().populate("matiere_id");
    res.status(200).json({ message: null, data: items });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let items = await ItemModel.find(filter);
    res.status(200).json({ message: null, data: items });
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
  getPage: async function (req, res) {
    const {pageSize, pageNumber, searchText, filter, sort} = req.body
    const filterWithSearch={...filter, name:{$regex:searchText, $options:'i'}}
    const total_number = await ItemModel.countDocuments(filterWithSearch)
    ItemModel.find(filterWithSearch).sort(sort).skip((pageNumber-1)*pageSize).limit(pageSize)
    .then(function (items) {
      res.status(200).json({message: "Item found successfully", total_number: total_number, data: items});
    })
    .catch(function (err) {
      console.log(err);
      res.status(400).json({message: "Item not found", data: null});
    });
  },
};
