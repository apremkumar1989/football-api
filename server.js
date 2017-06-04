
var express = require('express');
var bodyParser = require('body-parser');

app = express();
port = 54321;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var routes = require('./routes');
routes(app);

app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  res.status(500).send({status:500, message: 'internal error', type:'internal'});
});


app.listen(port);

console.log('started server. listening on port:'+port);