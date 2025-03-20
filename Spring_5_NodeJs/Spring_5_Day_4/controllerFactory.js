// controllerFactory.js
const createController = (Model) => {
    return {
        create: async (req, res) => {
            console.log(`POST ${req.baseUrl} called`);
            try {
                const data = await Model.create(req.body);
                res.status(201).json({ status: "success", data });
            } catch (error) {
                res.status(400).json({ status: "error", message: error.message });
            }
        },

        getAll: async (req, res) => {
            console.log(`GET ${req.baseUrl} called`);
            try {
                const data = await Model.find();
                res.status(200).json({ status: "success", data });
            } catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        },

        getById: async (req, res) => {
            console.log(`GET ${req.baseUrl}/${req.params.id} called`);
            try {
                const data = await Model.findById(req.params.id);
                if (!data) {
                    return res.status(404).json({ status: "error", message: "Not found" });
                }
                res.status(200).json({ status: "success", data });
            } catch (error) {
                res.status(400).json({ status: "error", message: "Invalid ID" });
            }
        },

        update: async (req, res) => {
            console.log(`PUT ${req.baseUrl}/${req.params.id} called`);
            try {
                const data = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
                if (!data) {
                    return res.status(404).json({ status: "error", message: "Not found" });
                }
                res.status(200).json({ status: "success", data });
            } catch (error) {
                res.status(400).json({ status: "error", message: error.message });
            }
        },

        delete: async (req, res) => {
            console.log(`DELETE ${req.baseUrl}/${req.params.id} called`);
            try {
                const data = await Model.findByIdAndDelete(req.params.id);
                if (!data) {
                    return res.status(404).json({ status: "error", message: "Not found" });
                }
                res.status(200).json({ status: "success", message: "Deleted successfully" });
            } catch (error) {
                res.status(400).json({ status: "error", message: error.message });
            }
        }
    };
};

module.exports = createController;
