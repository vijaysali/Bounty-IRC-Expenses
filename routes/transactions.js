var express = require('express');
var models  = require('../models');
var router = express.Router();

// addt paid 600 for dinner yesterday. all
// addt paid 100 for coffee on Feb 3rd 2018.
//addt user owe another-user 50 some-text.

router.post('/', function(req, res, next) {
  //var response = {amount: 600, description: "dinner yesterday", all: true, user_id: 1};
  models.Transaction.create({
    amount: response.amount,
    description: response.description,
    all: response.all,
    user_id: response.user_id
  }).then(function(transaction) {
    res.json(transaction);
  });
});

module.exports = router;
