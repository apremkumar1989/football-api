var express = require('express');
var router = express.Router();
var teamService = require('../services/teamService.js');

router.get('/',function(req, res){
	teamPromise = teamService.getTeamById(1);
	teamPromise.then(team=>{
		if(team){
			teams = [team,team,team];

			res.json({
				'total_results' : 86,
				'offset' : 3,
				'limit' : 10,
				'teams' : teams
			});
		}else{
			res.json({
				'total_results' : 0,
				'offset' : 3,
				'limit' : 10,
				'teams' : []
			});
		}
	}).catch(err=>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
	
});

router.get('/:team_id',function(req, res){
	teamPromise = teamService.getTeamById(req.params.team_id);
	teamPromise.then(team=>{
		if (team==null){
			res.status(404).send({ err_code: 'not_found',message: 'not found' });
			return;
		}
		res.json({
			'team' : team
		});
	}).catch(err=>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
	
});

router.post('/',function(req, res){
	team = req.body
	teamPromise = teamService.createTeam(team);

	teamPromise.then(team=>{
		res.json({
			'team' : team
		});
	}).catch(err=>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
	
});



module.exports=router