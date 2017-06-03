
var express = require('express');
var bodyParser = require('body-parser');

app = express();
port = 54321;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes');
routes(app);

app.listen(port);

console.log('started server. listening on port:'+port);