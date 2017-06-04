var express = require('express');
var router = express.Router();
var competitionService = require('../services/competitionService.js');

router.get('/',function(req, res){
	competitionPromise = competitionService.getCompetitionById(1);

	competitionPromise.then((competition)=>{
		if(competition!=null){
			competitions = [competition,competition,competition];

			res.json({
				'total_results' : 86,
				'offset' : 3,
				'limit' : 10,
				'competitions' : competitions
			});
			return;
		}
		res.status(200).json({
				'total_results' : 0,
				'offset' : 3,
				'limit' : 10,
				'competitions' : []
			});	
		
	}).catch((err) =>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
	
});

router.get('/:competition_id',function(req, res){
	competitionPromise = competitionService.getCompetitionById(req.params.competition_id);

	competitionPromise.then(competition=>{
		if(competition){
			res.json({
				'competition' : competition
			});
			return;
		}
		res.status(404).send({message:'not found',err_code:'not_found'});
	}).catch(err=>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});

});

router.post('/',function(req, res){
	competition = req.body
	competitionPromise = competitionService.createCompetition(competition);

	competitionPromise.then(competition=>{
		res.json({
			'competition' : competition
		});
	}).catch(err=>{
		res.status(500).send({ err_code: 'internal_server_error',message: 'internal_server_error' });
	});
});



module.exports=router