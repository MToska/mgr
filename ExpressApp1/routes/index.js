'use strict';
var express = require('express');
var router = express.Router();
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});


// Connect to the db

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    var db = client.db('my_mgr');
    db.collection('my_data').find({P1010: 29.1992}).toArray(function (err, docs) {

        // Print the documents returned
        docs.forEach(function (doc) {
            console.log(doc);
        });

        // Close the DB
        client.close();
    });

});



module.exports = router;
