'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
const mongodb = require('mongodb');
var fileUpload = require('express-fileupload');
var csv = require('fast-csv');
var mongoose = require('mongoose');



var routes = require('./routes/index');


var app = express();
app.use(fileUpload());
mongoose.connect('mongodb://localhost/my_mgr');


//view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout:'layout', layoutsDir: __dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

app.get('/', function (req, res) {

 res.sendFile(__dirname + '/views/index.hbs');


});



global.newCollectionName = " ";

    app.post('/', function (req, res) {

        var fileName = req.files.file.name;
        var db = fileName.split(".");
        var dbName = db[0];
        newCollectionName = dbName;
   
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
        var authorFile = req.files.file;
        var uploadingFiles = [];
        var Author = require('./routes/schemaP1');
        csv
            .fromString(authorFile.data.toString(), {
                headers: true,
                ignoreEmpty: true
            })
            .on("data", function (data) {
                data['_id'] = new mongoose.Types.ObjectId();

                uploadingFiles.push(data);
            })
            .on("end", function () {
                Author.create(uploadingFiles, function (err, documents) {
                    if (err) throw err;

                    res.send(uploadingFiles.length + ' rekordów zostało dodanych do bazy .<br/> <a href="/"> Powrót do strony głównej</a>');
                });
            });
    });



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

