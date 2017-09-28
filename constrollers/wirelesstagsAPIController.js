const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('../Models/TagData');
const TagData = mongoose.model('TagData');

exports.tagdataAPI = async (req, res) => {
  const data = await TagData.find({});
  console.log(data[data.length - 1]);
  res.json(data);
};