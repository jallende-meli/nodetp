var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../modules/db');

router.post('/saved_agencies', function (req, res) {
  var agencies = req.body.agencies;
  if (agencies) {
    db.saveAgencies(agencies);
    res.sendStatus(200);
  } else {
    res.status(400);
    res.send("body is not rigth")
  }

});

router.get('/saved_agencies', function (req, res) {
  var data = db.readAgencies();
  res.send(data);
});

module.exports = router;
