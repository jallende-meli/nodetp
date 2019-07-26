var express = require('express');
var router = express.Router();
var request = require('request');
var utils = require('../modules/utils');

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

router.get('/:id/payment_methods', function (req, res) {
    var id = req.params.id;
    var url = SITES_URL + '/' + id + '/payment_methods';
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

router.get('/:id/payment_methods/:method_id', function (req, res) {
    var id = req.params.id;
    var method_id = req.params.method_id;

    var longitud = req.query.longitud;
    var latitud = req.query.latitud;
    var radius = req.query.radius;
    var order_crit = req.query.order_crit;
    var order = req.query.order;
    var nearTo = '';

    if (id && method_id) {
        if (latitud && longitud && radius) {
            nearTo = latitud + ',' + longitud + ',' + radius
        } else {
            res.status(400);
            res.send("Latitud, Longitud or radius bad argument");
        }
        var qs = {'near_to' : nearTo};
        var url = SITES_URL + '/' + id + '/payment_methods/' + method_id + '/agencies';
        request.initParams();
        request.get({url:url, qs: qs}, function (error, response) {
            if (error) {
                res.send(error)
            } else {
                var agencies = JSON.parse(response.body).results;
                if (order_crit) {
                    agencies = utils.orderAgencies(agencies, order_crit, order);
                }
                res.send(agencies);
            }
        })
    } else {
        res.status(400);
        res.send("Bad request, method or site");
    }
});

module.exports = router;