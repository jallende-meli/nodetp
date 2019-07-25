var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../modules/db');



router.post('/saved_agencies', function (req, res) {
  var toSaveAgencies = req.body.agencies;
  var agencies = db.readAgencies();
  if (agencies) {
    for (var i = 0; i < toSaveAgencies.length; i++) {
      var index = agencies.findIndex(agency => agency.id === toSaveAgencies[i].id);
      if (index === -1) {
        agencies.push(toSaveAgencies[i]);
      }
    }
    db.saveAgencies(agencies);
    res.sendStatus(200);
  } else {
    res.status(400);
    res.send("body is not right");
  }

});

router.get('/saved_agencies', function (req, res) {
  var data = db.readAgencies();
  res.send(data);
});

router.post('/delete_agencies', function (req, res) {
  try {
    var agencies = db.readAgencies();
    var toDeleteAgencies = req.body.agencies;
    for (var i = 0 ; i < toDeleteAgencies.length; i++) {
      console.log("FOR");
      var index = agencies.findIndex(agency => agency.id === toDeleteAgencies[i].id);
      console.log("index: ", index);
      if (index !== -1) {
        agencies.splice(index, 1);
      }
    }
    db.saveAgencies(agencies);
    res.status(200);
    res.send(agencies);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});


module.exports = router;