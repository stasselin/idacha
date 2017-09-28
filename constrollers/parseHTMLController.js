let axios = require('axios');
let request = require('request');


let parseData = async () => {
    request('https://quickstart.internetofthings.ibmcloud.com/#/device/a0e6f8c1f204/sensor/', function(error, response, html){
        console.log(html);
    });

};

parseData();