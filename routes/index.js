let express = require('express');
let router = express.Router();
let {tagdataAPI, windowSwitcher, updateData} = require('../constrollers/wirelesstagsAPIController');


router.get('/api', tagdataAPI);
router.get('/api/window', windowSwitcher);


module.exports = router;
