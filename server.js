var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/', express.static(__dirname + '/app/public'));

app.use('/', htmlRoutes);
app.use('/', apiRoutes);


app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})
