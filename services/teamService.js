
console.log('team service file called..');

module.exports.getTeamById = function(id){
	console.log('inside a team service method');
	return new Promise((resolve,reject)=>{
		db.collection('team').findOne({}).then(function(team){
			resolve(team)
		});
	});
}

module.exports.createTeam = function(team){
	teamPromise = db.collection('team').insertOne(team);
	return new Promise((resolve,reject)=>{
		teamPromise.then(data=>{
			resolve(team)
		}).catch(err=>{
			reject(err)
		})
	})
}		