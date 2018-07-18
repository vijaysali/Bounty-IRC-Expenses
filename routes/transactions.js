var express = require('express');
var models  = require('../models');
var router = express.Router();

function isValidDate(dates) {
  var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  var day, month, year = 0;
  if (dates[0].match(/(\d+(?:st|nd|rd|th))/) && months.include?(dates[1]) && (dates[2] >= 1900 && dates[2] <= 2018)) {
    day = dates[0].match(/\d+/);
    month = dates[1];
    year = dates[2];
    return new Date(day+month+year).toISOString();
  }
  else {
    return false;
  }
}

// addt paid 600 for dinner yesterday. all
// addt paid 100 for coffee on Feb 3rd 2018.
// addt user owe another-user 50 some-text.

function parser_library (inputString) {
  parseArray = inputString.split(" ");
  if (parseArray[0] === 'addt' && parseArray[1] === 'paid' && parseArray[2] >= 0 && parseArray[3] === "for" && parseArray[5] === "on"){

    var extractDate  = parseArray.slice(6);
    var extractUser  = parseARray.slice(9);
    if (validDate = isValidDate(extractDate)) {

    }
    return true;
  }
  else
  {
    return false;
  }

  //return {amount: 600, description: "dinner yesterday", all: true, user_id: 1};
}
router.post('/', function(req, res, next) {
  var response = parser_library();
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
