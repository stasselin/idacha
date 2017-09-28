const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tagdataSchema = new mongoose.Schema({
    name: String,
    window: {type: Boolean, default: false},
    freez_defence: {type: Boolean, default: true},
    data: {
        type: mongoose.Schema.ObjectId,
        ref: 'TagsLive'
    }
});

module.exports = mongoose.model('TagData', tagdataSchema);