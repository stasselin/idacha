const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('../Models/TagData');
require('../Models/TagsLive');
const TagData = mongoose.model('TagData');
const TagsLive = mongoose.model('TagsLive');

exports.tagdataAPI = async (req, res) => {
  const data = await TagData.find({}).populate('data');
  console.log(data);
  res.json(data);
};

exports.windowSwitcher = async (req, res) => {
    let foundData = await  TagData.findOne({'name': 'Теплица'});
    if(foundData.window) {
      foundData.window = false;
    } else {
        foundData.window = true;
    }
    await TagData.findByIdAndUpdate({_id: foundData.id}, foundData);
    let updatedData = await  TagData.findOne({'name': 'Теплица'}).populate('data');
    res.json(updatedData);
};

