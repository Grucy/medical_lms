const DPModel = require("../../models/learningData/DP");

module.exports = {
  create: async function (req, res) {
    const dp = req.body;
    await DPModel.create(dp)
      .then(function (result) {
        res.status(200).json({
          message: "DP added successfully!!!",
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
    let dps = await DPModel.find();
    res.status(200).json({ message: null, data: dps });
  },
  getFilter: async function (req, res) {
    const filter = req.body;
    let dps = await DPModel.find(filter);
    res.status(200).json({ message: null, data: dps });
  },
  getById: function (req, res) {
    DPModel.findById(req.params.id)
      .then(function (dp) {
        res.status(200).json({ message: null, data: dp });
      })
      .catch(function (err) {
        console.error(err);
        res.status(404).json({ message: "DP not found", data: null });
      });
  },
  updateById: function (req, res) {
    const dp = req.body;
    DPModel.findByIdAndUpdate(req.params.id, dp)
      .then(function (dp) {
        res
          .status(200)
          .json({ message: "DP updated successfully!", data: dp });
      })
      .catch(function (err) {
        console.error(err);
        res.status(400).json({ message: "Update failed", data: null });
      });
  },
  deleteById: function (req, res) {
    console.log(req.params.id);
    DPModel.findByIdAndRemove(req.params.id)
      .then(function () {
        res
          .status(200)
          .json({ message: "DP deleted successfully!", data: null });
      })
      .catch(function (err) {
        res.status(400).json({ message: "Delete failed", data: null });
      });
  },
};
