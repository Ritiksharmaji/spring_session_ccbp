module.exports = (fn) => (req, res, next) => {
    fn(req, res, next)
    .catch((err) => res.status(400).json({ status: "error", message: err.message }));
  };
  