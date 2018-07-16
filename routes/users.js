var express = require('express');
var models  = require('../models');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});


router.post('/', function(req, res, next) {
  models.User.create({
    username: req.body.username,
    src: req.body.src
  }).then(function(user) {
    res.json(user);
  });
});

module.exports = router;
