const catchAsync = require("./catchAsync"); // Optional: Handles async errors
const factoryController = {
  
  // CREATE Document
  createOne: (Model) => catchAsync(async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: "success", data: doc });
  }),

  // GET All Documents
  getAll: (Model) => catchAsync(async (req, res) => {
    const docs = await Model.find();
    res.status(200).json({ status: "success", results: docs.length, data: docs });
  }),

  // GET Single Document by ID
  getOne: (Model) => catchAsync(async (req, res) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ status: "error", message: "Document not found" });
    }
    res.status(200).json({ status: "success", data: doc });
  }),

  // UPDATE Document by ID
  updateOne: (Model) => catchAsync(async (req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doc) {
      return res.status(404).json({ status: "error", message: "Document not found" });
    }
    res.status(200).json({ status: "success", data: doc });
  }),

  // DELETE Document by ID
  deleteOne: (Model) => catchAsync(async (req, res) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.status(404).json({ status: "error", message: "Document not found" });
    }
    res.status(204).json({ status: "success", message: "Document deleted successfully" });
  }),

};

module.exports = factoryController;
