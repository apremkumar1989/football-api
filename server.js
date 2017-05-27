
var express = require('express');

app = express();
port = 54321;

var routes = require('./routes');
routes(app);

app.listen(port);

console.log('started server. listening on port:'+port);