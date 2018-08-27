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


    router.get('/v-06', function (req, res) {

        //P1 for 0.6 value
        MongoClient.connect(url, (err, client) => {
            var db = client.db('my_mgr');
            
                var results = db.collection('P1').aggregate(
                    [
                        { $match: { P1034: { $gt: 0.6, $lt: 0.7 } } },
                        {
                            $group: {
                                _id: null,
                                minP1034: { $min: "$P1034" },
                                maxP1034: { $max: "$P1034" },
                                avgP1034: { $avg: "$P1034" },
    
                                minP1036: { $min: "$P1036" },
                                maxP1036: { $max: "$P1036" },
                                avgP1036: { $avg: "$P1036" },
    
                                minP1058: { $min: "$P1058" },
                                maxP1058: { $max: "$P1058" },
                                avgP1058: { $avg: "$P1058" },
    
                                minP1060: { $min: "$P1060" },
                                maxP1060: { $max: "$P1060" },
                                avgP1060: { $avg: "$P1060" },
    
                                minP1062: { $min: "$P1062" },
                                maxP1062: { $max: "$P1062" },
                                avgP1062: { $avg: "$P1062" },
    
                                minP1064: { $min: "$P1064" },
                                maxP1064: { $max: "$P1064" },
                                avgP1064: { $avg: "$P1064" },
    
                                minP1104: { $min: "$P1104" },
                                maxP1104: { $max: "$P1104" },
                                avgP1104: { $avg: "$P1104" },
    
                                minP1106: { $min: "$P1106" },
                                maxP1106: { $max: "$P1106" },
                                avgP1106: { $avg: "$P1106" },
    
                                minP1108: { $min: "$P1108" },
                                maxP1108: { $max: "$P1108" },
                                avgP1108: { $avg: "$P1108" },
    
                                minP1112: { $min: "$P1112" },
                                maxP1112: { $max: "$P1112" },
                                avgP1112: { $avg: "$P1112" },
    
                                minP1114: { $min: "$P1114" },
                                maxP1114: { $max: "$P1114" },
                                avgP1114: { $avg: "$P1114" },
    
                                minP1118: { $min: "$P1118" },
                                maxP1118: { $max: "$P1118" },
                                avgP1118: { $avg: "$P1118" },
    
                                minP1120: { $min: "$P1120" },
                                maxP1120: { $max: "$P1120" },
                                avgP1120: { $avg: "$P1120" },
    
                                minP1124: { $min: "$P1124" },
                                maxP1124: { $max: "$P1124" },
                                avgP1124: { $avg: "$P1124" },
    
                                minP1126: { $min: "$P1126" },
                                maxP1126: { $max: "$P1126" },
                                avgP1126: { $avg: "$P1126" },
    
                                minP1128: { $min: "$P1128" },
                                maxP1128: { $max: "$P1128" },
                                avgP1128: { $avg: "$P1128" },
    
                                minP1130: { $min: "$P1130" },
                                maxP1130: { $max: "$P1130" },
                                avgP1130: { $avg: "$P1130" },
    
                                minP1132: { $min: "$P1132" },
                                maxP1132: { $max: "$P1132" },
                                avgP1132: { $avg: "$P1132" },
    
                                minP1134: { $min: "$P1134" },
                                maxP1134: { $max: "$P1134" },
                                avgP1134: { $avg: "$P1134" },
    
                                minP1136: { $min: "$P1136" },
                                maxP1136: { $max: "$P1136" },
                                avgP1136: { $avg: "$P1136" },
    
                                minP1138: { $min: "$P1138" },
                                maxP1138: { $max: "$P1138" },
                                avgP1138: { $avg: "$P1138" },
    
                                minP1140: { $min: "$P1140" },
                                maxP1140: { $max: "$P1140" },
                                avgP1140: { $avg: "$P1140" },
    
                                minP1142: { $min: "$P1142" },
                                maxP1142: { $max: "$P1142" },
                                avgP1142: { $avg: "$P1142" },
    
                                minP1144: { $min: "$P1144" },
                                maxP1144: { $max: "$P1144" },
                                avgP1144: { $avg: "$P1144" },
    
                                minP1146: { $min: "$P1146" },
                                maxP1146: { $max: "$P1146" },
                                avgP1146: { $avg: "$P1146" },
    
                                minP1148: { $min: "$P1148" },
                                maxP1148: { $max: "$P1148" },
                                avgP1148: { $avg: "$P1148" },
    
                                minP1150: { $min: "$P1150" },
                                maxP1150: { $max: "$P1150" },
                                avgP1150: { $avg: "$P1150" },
    
                                minP1152: { $min: "$P1152" },
                                maxP1152: { $max: "$P1152" },
                                avgP1152: { $avg: "$P1152" },
    
                                minP1154: { $min: "$P1154" },
                                maxP1154: { $max: "$P1154" },
                                avgP1154: { $avg: "$P1154" },
    
                                minP1156: { $min: "$P1156" },
                                maxP1156: { $max: "$P1156" },
                                avgP1156: { $avg: "$P1156" },
    
                                minP1158: { $min: "$P1158" },
                                maxP1158: { $max: "$P1158" },
                                avgP1158: { $avg: "$P1158" },
    
                                minP1160: { $min: "$P1160" },
                                maxP1160: { $max: "$P1160" },
                                avgP1160: { $avg: "$P1160" },
    
                                minP1162: { $min: "$P1162" },
                                maxP1162: { $max: "$P1162" },
                                avgP1162: { $avg: "$P1162" },
    
                                minP1164: { $min: "$P1164" },
                                maxP1164: { $max: "$P1164" },
                                avgP1164: { $avg: "$P1164" },
    
                                minP1166: { $min: "$P1166" },
                                maxP1166: { $max: "$P1166" },
                                avgP1166: { $avg: "$P1166" },
    
                                minP1168: { $min: "$P1168" },
                                maxP1168: { $max: "$P1168" },
                                avgP1168: { $avg: "$P1168" },
    
                                minP1170: { $min: "$P1170" },
                                maxP1170: { $max: "$P1170" },
                                avgP1170: { $avg: "$P1170" },
    
                                minP1172: { $min: "$P1172" },
                                maxP1172: { $max: "$P1172" },
                                avgP1172: { $avg: "$P1172" },
    
                                minP1182: { $min: "$P1182" },
                                maxP1182: { $max: "$P1182" },
                                avgP1182: { $avg: "$P1182" },
    
                                minP1188: { $min: "$P1188" },
                                maxP1188: { $max: "$P1188" },
                                avgP1188: { $avg: "$P1188" },
    
                                minP1194: { $min: "$P1194" },
                                maxP1194: { $max: "$P1194" },
                                avgP1194: { $avg: "$P1194" }
                            }
                        }
                    ]).next(function (err, results) {
                        try {
                            res.render('index', {results})
                        } catch(err){
                            console.log(err);
                        }
                        
                    }
            );


        });


    });


router.get('/v-08', function (req, res) {

    //P1 for 0.6 value
    MongoClient.connect(url, (err, client) => {
        var db = client.db('my_mgr');
var results = db.collection('P2').aggregate(
    [
        { $match: { P2036: { $gt: 0.6, $lt: 0.7 } } },
        {
            $group: {
                _id: null,
                minP2034: { $min: "$P2034" },
                maxP2034: { $max: "$P2034" },
                avgP2034: { $avg: "$P2034" },

                minP2036: { $min: "$P2036" },
                maxP2036: { $max: "$P2036" },
                avgP2036: { $avg: "$P2036" },

                minP2058: { $min: "$P2058" },
                maxP2058: { $max: "$P2058" },
                avgP2058: { $avg: "$P2058" },

                minP2060: { $min: "$P2060" },
                maxP2060: { $max: "$P2060" },
                avgP2060: { $avg: "$P2060" },

                minP2062: { $min: "$P2062" },
                maxP2062: { $max: "$P2062" },
                avgP2062: { $avg: "$P2062" },

                minP2064: { $min: "$P2064" },
                maxP2064: { $max: "$P2064" },
                avgP2064: { $avg: "$P2064" },

                minP2104: { $min: "$P2104" },
                maxP2104: { $max: "$P2104" },
                avgP2104: { $avg: "$P2104" },

                minP2106: { $min: "$P2106" },
                maxP2106: { $max: "$P2106" },
                avgP2106: { $avg: "$P2106" },

                minP2108: { $min: "$P2108" },
                maxP2108: { $max: "$P2108" },
                avgP2108: { $avg: "$P2108" },

                minP2112: { $min: "$P2112" },
                maxP2112: { $max: "$P2112" },
                avgP2112: { $avg: "$P2112" },

                minP2114: { $min: "$P2114" },
                maxP2114: { $max: "$P2114" },
                avgP2114: { $avg: "$P2114" },

                minP2118: { $min: "$P2118" },
                maxP2118: { $max: "$P2118" },
                avgP2118: { $avg: "$P2118" },

                minP2120: { $min: "$P2120" },
                maxP2120: { $max: "$P2120" },
                avgP2120: { $avg: "$P2120" },

                minP2124: { $min: "$P2124" },
                maxP2124: { $max: "$P2124" },
                avgP2124: { $avg: "$P2124" },

                minP2126: { $min: "$P2126" },
                maxP2126: { $max: "$P2126" },
                avgP2126: { $avg: "$P2126" },

                minP2128: { $min: "$P2128" },
                maxP2128: { $max: "$P2128" },
                avgP2128: { $avg: "$P2128" },

                minP2130: { $min: "$P2130" },
                maxP2130: { $max: "$P2130" },
                avgP2130: { $avg: "$P2130" },

                minP2132: { $min: "$P2132" },
                maxP2132: { $max: "$P2132" },
                avgP2132: { $avg: "$P2132" },

                minP2134: { $min: "$P2134" },
                maxP2134: { $max: "$P2134" },
                avgP2134: { $avg: "$P2134" },

                minP2136: { $min: "$P2136" },
                maxP2136: { $max: "$P2136" },
                avgP2136: { $avg: "$P2136" },

                minP2138: { $min: "$P2138" },
                maxP2138: { $max: "$P2138" },
                avgP2138: { $avg: "$P2138" },

                minP2140: { $min: "$P2140" },
                maxP2140: { $max: "$P2140" },
                avgP2140: { $avg: "$P2140" },

                minP2142: { $min: "$P2142" },
                maxP2142: { $max: "$P2142" },
                avgP2142: { $avg: "$P2142" },

                minP2144: { $min: "$P2144" },
                maxP2144: { $max: "$P2144" },
                avgP2144: { $avg: "$P2144" },

                minP2146: { $min: "$P2146" },
                maxP2146: { $max: "$P2146" },
                avgP2146: { $avg: "$P2146" },

                minP2148: { $min: "$P2148" },
                maxP2148: { $max: "$P2148" },
                avgP2148: { $avg: "$P2148" },

                minP2150: { $min: "$P2150" },
                maxP2150: { $max: "$P2150" },
                avgP2150: { $avg: "$P2150" },

                minP2152: { $min: "$P2152" },
                maxP2152: { $max: "$P2152" },
                avgP2152: { $avg: "$P2152" },

                minP2154: { $min: "$P2154" },
                maxP2154: { $max: "$P2154" },
                avgP2154: { $avg: "$P2154" },

                minP2156: { $min: "$P2156" },
                maxP2156: { $max: "$P2156" },
                avgP2156: { $avg: "$P2156" },

                minP2158: { $min: "$P2158" },
                maxP2158: { $max: "$P2158" },
                avgP2158: { $avg: "$P2158" },

                minP2160: { $min: "$P2160" },
                maxP2160: { $max: "$P2160" },
                avgP2160: { $avg: "$P2160" },

                minP2162: { $min: "$P2162" },
                maxP2162: { $max: "$P2162" },
                avgP2162: { $avg: "$P2162" },

                minP2164: { $min: "$P2164" },
                maxP2164: { $max: "$P2164" },
                avgP2164: { $avg: "$P2164" },

                minP2166: { $min: "$P2166" },
                maxP2166: { $max: "$P2166" },
                avgP2166: { $avg: "$P2166" },

                minP2168: { $min: "$P2168" },
                maxP2168: { $max: "$P2168" },
                avgP2168: { $avg: "$P2168" },

                minP2170: { $min: "$P2170" },
                maxP2170: { $max: "$P2170" },
                avgP2170: { $avg: "$P2170" },

                minP2172: { $min: "$P2172" },
                maxP2172: { $max: "$P2172" },
                avgP2172: { $avg: "$P2172" },

                minP2182: { $min: "$P2182" },
                maxP2182: { $max: "$P2182" },
                avgP2182: { $avg: "$P2182" },

                minP2188: { $min: "$P2188" },
                maxP2188: { $max: "$P2188" },
                avgP2188: { $avg: "$P2188" },

                minP2194: { $min: "$P2194" },
                maxP2194: { $max: "$P2194" },
                avgP2194: { $avg: "$P2194" }

            }
        }
    ]).next(function (err, results) {
        try {
            res.render('index', { results })
        } catch (err) {
            console.log(err);
        }

    }
    );
    });


});


module.exports = router;
