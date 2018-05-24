

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('../Models/TagData');
require('../Models/TagsLive');
const TagData = mongoose.model('TagData');
const TagsLive = mongoose.model('TagsLive');
const {dbUrl} = require('../keys');

mongoose.connect(dbUrl);


let saveData = async () => {

    let data = {
        name: 'Теплица',
        data: '59cd68b96ef7934ed7178f4f'
    };

    let saveddata = await TagData(data).save();
    console.log(saveddata);
};

saveData();


let updateData = async () => {
  let foundData = await  TagData.findOne({'name': 'Теплица'});
  console.log(foundData);
  foundData.object_temp = Math.random()*(28-27) + 27;
  console.log(foundData);
  foundData.air_pressure = Math.random()*(990 - 989) + 989;
  foundData.humidity = Math.random()*(30-29) + 29;
  await TagData.findByIdAndUpdate({_id: foundData.id}, foundData);
};

//updateData();


let createFirstData = async () => {

    let data = {

        name: "Теплица",
        d: {
            gyro_x: "0",
            compass_y: "0",
            humidity: "0",
            acc_y: "0",
            acc_x: "0",
            object_temp: "0",
            light: "0",
            gyro_z: "0",
            compass_x: "0",
            ambient_temp: "0",
            gyro_y: "0",
            air_pressure: "0",
            compass_z: "0",
            acc_z: "0"
        }
    };

    let saveddata = await TagsLive(data).save();
    console.log(saveddata);
};

//createFirstData();