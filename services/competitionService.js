
console.log('competition service file called..');

module.exports.getCompetitionById = function(id){
	
	return new Promise((resolve,reject)=>{
		db.collection('competition').findOne({}).then(function(competition){
			resolve(competition)
		});
	});
}

module.exports.createCompetition = function(competition){
	competitionPromise = db.collection('competition').insertOne(competition);
	return new Promise((resolve,reject)=>{
		competitionPromise.then(data=>{
			resolve(competition)
		}).catch(err=>{
			reject(err)
		})
	})
}