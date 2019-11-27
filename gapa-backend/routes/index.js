var express = require('express');
var router = express.Router();
var path = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(path.joing(__dirname, '../public', 'index.html'));
});

module.exports = router;
