'use strict';
module.exports = function(app) {
  var players = require('./controllers/playercontroller');


  app.use('/players',players);
};