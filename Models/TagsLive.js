const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tagLiveSchema = new mongoose.Schema({
    d: {
        gyro_x: String,
        compass_y: String,
        humidity: String,
        acc_y: String,
        acc_x: String,
        object_temp: String,
        light: String,
        gyro_z: String,
        compass_x: String,
        ambient_temp: String,
        gyro_y: String,
        air_pressure: String,
        compass_z: String,
        acc_z: String
    }
});

module.exports = mongoose.model('TagsLive', tagLiveSchema);