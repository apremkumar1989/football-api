var Db = require('mongodb').Db,
 Server = require('mongodb').Server;

var db = new Db('football', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
	if(!err){
		console.log('connected to database');
		return;
	}
	console.log('could not connect to database');
    //db.close();
  });

module.exports=db;