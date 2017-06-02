var express = require('express');
var router = express.Router();
var competitionService = require('../services/competitionService.js');

router.get('/',function(req, res){
	competition = competitionService.getCompetitionById(1);
	competitions = [competition,competition,competition];

	res.json({
		'total_results' : 86,
		'offset' : 3,
		'limit' : 10,
		'competitions' : competitions
	});
});

router.get('/:team_id',function(req, res){
	competition = competitionService.getCompetitionById(req.params.team_id);
	if (competition==null){
		res.status(404).send({ err_code: 'not_found',message: 'not found' });
		return;
	}
	res.json({
		'competition' : competition
	});
});

router.post('/',function(req, res){
	compeition = { 
		'id' : id,
		'name' : 'Premier League',
		'type' : 'league',
		'country' : 'England'
	};

	res.json({
		'competition' : compeition
	});
});



module.exports=router