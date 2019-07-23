var express = require('express');
var router = express.Router();
var request = require('request');

SITES_URL = "https://api.mercadolibre.com/sites";

router.get('/', function (req, res) {
   request.get(SITES_URL, function (error, response) {
       if (error) {
           res.send(error)
       } else {
           res.send(response.body)
       }
   })
});

https://api.mercadolibre.com/sites/MLA/payment_methods/

router.get('/:id/payment_methods', function (req, res) {
    var id = req.params.id;
    var url = SITES_URL + '/' + id + '/payment_methods';
    console.log("URL: " + url)
    if (id) {
        request.get(url, function (error, response) {
            if (error) {
                res.send(error)
            } else {
                res.send(response.body)
            }
        })
    } else {
        res.send('error')
    }
});


module.exports = router;