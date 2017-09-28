let express = require('express');
let router = express.Router();
let {tagdataAPI, windowSwitcher, updateData} = require('../constrollers/wirelesstagsAPIController');

/* GET home page. */
router.get('/api', tagdataAPI);
router.get('/api/window', windowSwitcher);
router.get('/api/update', updateData);

module.exports = router;
