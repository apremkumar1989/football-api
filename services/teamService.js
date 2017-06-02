
console.log('team service file called..');

module.exports.getTeamById = function(id){
	console.log('inside a player service method');
	team = { 
		'id' : id,
		'name' : 'manchester united',
		'country' : 'England',
		'team_type' : 'club'
	};

	return team;
}