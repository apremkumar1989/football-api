var express = require('express');
var router = express.Router();
var teamService = require('../services/teamService.js');

router.get('/',function(req, res){
	team = teamService.getTeamById(1);
	teams = [team,team,team];

	res.json({
		'total_results' : 86,
		'offset' : 3,
		'limit' : 10,
		'teams' : teams
	});
});

router.get('/:team_id',function(req, res){
	team = teamService.getTeamById(req.params.team_id);
	if (team==null){
		res.status(404).send({ err_code: 'not_found',message: 'not found' });
		return;
	}
	res.json({
		'team' : team
	});
});

router.post('/',function(req, res){
	team = { 
		'id' : 10,
		'name' : 'manchester united',
		'country' : 'England'
	};
	team = teamService.getTeamById(req.params.team_id);

	res.json({
		'team' : team
	});
});



module.exports=router