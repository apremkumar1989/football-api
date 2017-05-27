'use strict';
module.exports = function(app) {
  var players = require('./controllers/playercontroller');


  // todoList Routes
  app.route('/players')
    .get(players.list_all_players)
    .post(players.create_player);


  app.route('/players/:player_id')
    .get(players.get_player);
};