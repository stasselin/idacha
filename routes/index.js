let express = require('express');
let router = express.Router();
let {tagdataAPI} = require('../constrollers/wirelesstagsAPIController');

/* GET home page. */
router.get('/', tagdataAPI);

module.exports = router;
