const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tagdataSchema = new mongoose.Schema({
    data: {type: Date, default: Date.now},
    object_temp: Number,
    air_pressure: Number,
    humidity: Number,
    window: {type: Boolean, default: false},
    freez_defence: {type: Boolean, default: true},
});

module.exports = mongoose.model('TagData', tagdataSchema);