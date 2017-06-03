var express = require('express');
var router = express.Router();
var playerService = require('../services/playerService.js');

router.get('/',function(req, res){
	playerPromise = playerService.getPlayerById(1);

	

	playerPromise.then((player)=>{
		if(player){
			players = [player,player,player];
			res.json({
				'total_results' : 86,
				'offset' : 3,
				'limit' : 10,
				'players' : players
			});
		}
		res.status(200).json({
				'total_results' : 0,
				'offset' : 3,
				'limit' : 10,
				'players' : []
			});	
		
	}).catch((err) =>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
});

router.get('/:player_id',function(req, res){
	playerPromise = playerService.getPlayerById(req.params.player_id);
	playerPromise.then((player)=>{
		if(player){
			res.json({
				'player' : player
			});	
		}
		res.status(404).send({message:'not found',err_code:'not_found'});	
		
	}).catch((err) =>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
});

router.post('/',function(req, res){
	playerPromise = playerService.createPlayer(req.body);	
	playerPromise.then(player=>{
		res.json({
			'player' : player
		});	
	}).catch(err=>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	})
});

module.exports=router