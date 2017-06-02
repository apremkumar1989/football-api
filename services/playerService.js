
console.log('player service file called..');
module.exports.getPlayerById = function(id){
	console.log('inside a player service method');
	player = {
		'id' : id,
		'name' : 'Ronaldinho',
		'dob' : '03-07-1983',
		'country' : 'Brazil',
	};

	return player;
}