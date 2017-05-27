
module.exports.list_all_players = function(req, res){
	player = {
		'id' : 1,
		'name' : 'Ronaldinho',
		'dob' : '03-07-1983',
		'country' : 'Brazil',
	};
	players = [player,player,player];

	res.json({
		'total_results' : 86,
		'offset' : 3,
		'limit' : 10,
		'players' : players
	});
}


module.exports.get_player = function(req, res){
	player = {
		'id' : 1,
		'name' : 'Ronaldinho',
		'dob' : '03-07-1983',
		'country' : 'Brazil',
	};
	res.json({
		'player' : player
	});
}

module.exports.create_player = function(req, res){
	player = {
		'id' : 1,
		'name' : 'Ronaldinho',
		'dob' : '03-07-1983',
		'country' : 'Brazil',
	};
	res.json({
		'player' : player
	});
}