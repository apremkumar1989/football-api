'use strict';
module.exports = function(app) {
  var players = require('./controllers/playercontroller');
  var teams = require('./controllers/teamController');
  var competitions = require('./controllers/competitionController');


  app.use('/players',players);
  app.use('/teams',teams);
  app.use('/competitions',competitions);
};