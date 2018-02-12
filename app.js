var express = require ('express');
var app = express ();
var index = require ('./routes/index')
var admin = require ('./routes/admin')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/admin', admin);

var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("App is running on port " + port);
});

module.exports = app;
