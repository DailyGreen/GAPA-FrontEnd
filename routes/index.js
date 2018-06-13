var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('business/authentication', { title: 'GAPA index page'});
});

router.get('/login', function(req, res) {
    res.render('business/login', { title: 'GAPA Login page'});
});

router.get('/alogin', function(req, res) {
    res.render('business/authentication', { title: 'GAPA Login page'});
});

router.get('/rooms', function(req, res) {
    res.render('business/rooms', { title: 'GAPA Game Room page'});
});

module.exports = router;