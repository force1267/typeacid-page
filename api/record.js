var record = 0

module.exports = (req, res) => {
  res.status(200).json(++ record);
};