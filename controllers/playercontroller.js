var express = require('express');
var router = express.Router();
var playerService = require('../services/playerService.js');

router.get('/',function(req, res){
	player = playerService.getPlayerById(1);
	players = [player,player,player];

	res.json({
		'total_results' : 86,
		'offset' : 3,
		'limit' : 10,
		'players' : players
	});
});

router.get('/:player_id',function(req, res){
	player = playerService.getPlayerById(req.params.player_id);
	if (player==null){
		res.status(404).send({ err_code: 'not_found',message: 'not found' });
		return;
	}
	res.json({
		'player' : player
	});
});

router.post('/',function(req, res){
	player = {
		'id' : 1,
		'name' : 'Ronaldinho',
		'dob' : '03-07-1983',
		'country' : 'Brazil',
	};
	res.json({
		'player' : player
	});
});

module.exports=router