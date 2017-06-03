db = require('../connection/db.js');

console.log('player service file called..');
module.exports.getPlayerById = function(id){
	console.log('inside a player service method');
	return new Promise((resolve,reject)=>{
		db.collection('player').findOne({}).then(function(player){
			resolve(player)
		});
	});
}

module.exports.createPlayer = function(player){
	playerPromise = db.collection('player').insertOne(player);
	return new Promise((resolve,reject)=>{
		playerPromise.then(data=>{
			resolve(player)
		}).catch(err=>{
			reject(err)
		})
	})
}