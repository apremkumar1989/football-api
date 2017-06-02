'use strict';
module.exports = function(app) {
  var players = require('./controllers/playercontroller');
  var teams = require('./controllers/teamController');


  app.use('/players',players);
  app.use('/teams',teams);
};