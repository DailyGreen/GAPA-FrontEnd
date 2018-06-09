var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('business/index', { title: 'GAPA index page'});
});

router.get('/login', function(req, res) {
    res.render('business/login', { title: 'GAPA Login page'});
});
module.exports = router;