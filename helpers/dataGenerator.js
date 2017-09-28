const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('../Models/TagData');
const TagData = mongoose.model('TagData');

mongoose.connect('mongodb://localhost/idacha');


let saveData = async () => {

    let data = {
        object_temp: Math.random()*(28-27) + 27,
        air_pressure: Math.random()*(990 - 989) + 989,
        humidity: Math.random()*(30-29) + 29,
    };

    await  TagData(data).save();
};

saveData();
