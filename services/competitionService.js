
console.log('competition service file called..');

module.exports.getCompetitionById = function(id){
	competition = { 
		'id' : id,
		'name' : 'Premier League',
		'type' : 'league',
		'country' : 'England',
		'year' : 2017
	};

	return competition;
}