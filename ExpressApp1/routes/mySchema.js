﻿var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    Date: String,
    P1010: Number,
    P1012: Number,
    P1014: Number,
    P1034: Number,
    P1036: Number,
    P1038: Number,
    P1044: Number,
    P1046: Number,
    P1048: Number,
    P1050: Number,
    P1052: Number,
    P1054: Number,
    P1058: Number,
    P1060: Number,
    P1062: Number,
    P1064: Number,
    P1066: Number,
    P1068: Number,
    P1070: Number,
    P1072: Number,
    P1074: Number,
    P1076: Number,
    P1078: Number,
    P1080: Number,
    P1094: Number,
    P1096: Number,
    P1098: Number,
    P1100: Number,
    P1102: Number,
    P1104: Number,
    P1106: Number,
    P1108: Number,
    P1110: Number,
    P1112: Number,
    P1114: Number,
    P1118: Number,
    P1120: Number,
    P1122: Number,
    P1124: Number,
    P1126: Number,
    P1128: Number,
    P1130: Number,
    P1132: Number,
    P1134: Number,
    P1136: Number,
    P1138: Number,
    P1140: Number,
    P1142: Number,
    P1144: Number,
    P1146: Number,
    P1148: Number,
    P1150: Number,
    P1152: Number,
    P1154: Number,
    P1156: Number,
    P1158: Number,
    P1160: Number,
    P1162: Number,
    P1164: Number,
    P1166: Number,
    P1168: Number,
    P1170: Number,
    P1172: Number,
    P1174: Number,
    P1176: Number,
    P1178: Number,
    P1180: Number,
    P1182: Number,
    P1184: Number,
    P1186: Number,
    P1188: Number,
    P1192: Number,
    P1194: Number,
    P1426: Number,
    P1427: Number,
    P1433: Number,
    P1434: Number,
    P1435: Number,
    P1440: Number
}, { collection: 'P1' });

var Author = mongoose.model('Author', authorSchema);

module.exports = Author;