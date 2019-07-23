var express = require('express');
var router = express.Router();
var request = require('request');

AGENGI_URL = "https://api.mercadolibre.com/sites/MLA/payment_methods/rapipago/agencies";

/* GET agencies listing. */

router.post('/search_result', function (req, res) {
  return res.send(req.body);
});

router.get('/', function(req, res, next) {
  var lon = req.query.lon;
  var lat = req.query.lat;
  var radius = req.query.radius;

  res.render('agencies_form', { title: 'Express' });

  request.get(AGENGI_URL, function (error, response) {
    if (error) {
      res.send(error);
    } else {
      if (lon && lat) {

      }
    }
  });



});

module.exports = router;
