'use strict';
var express = require('express');
var router = express.Router();
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/parameters', function (req, res) {
    res.render('parameters');
});

router.get('/', function (req, res) {
    res.render('index');
});
router.get('/addingdb', function (req, res) {
    res.render('addingdb');

});


router.get('/v-06', function (req, res) {

    MongoClient.connect(url, (err, client) => {
        var db = client.db('my_mgr');
            var results = db.collection('P1').aggregate(
                [
                    { $match: { P1034: { $gt: 0.6, $lt: 0.63 } } },
                    {
                        $group: {
                            _id: null,
                            doc: { $avg: "$P1034" }
                        }
                    }
                ]).next(function (err, results) {
                    try {
                        console.log(results.doc);
                        res.render('index', {results})
                    } catch(err){
                        console.log(err);
                    }
                    
                }
            );
});
});

module.exports = router;
