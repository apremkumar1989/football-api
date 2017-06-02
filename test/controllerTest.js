delete require.cache[require.resolve('../controllers/playercontroller')]
const request = require('supertest');
const express = require('express');
const should = require('should');
var mock = require('mock-require');
 
var playerService = mock('../services/playerService.js',{
  getPlayerById : function(id){ 
  	if (id>100)
  		return null;
  	
	player = {
		'id' : id,
		'name' : 'Ronaldinho',
		'dob' : '03-07-1983',
		'country' : 'Brazil',
	};
	return player;
  }
});
var players = require('../controllers/playercontroller');

const app = express();
app.use('/players',players);

describe('/players', function() {
  it('get method. success case. respond with json', function(done) {
    request(app)
      .get('/players')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('offset','limit','total_results','players');
      	res.body.players[0].should.have.keys('id','name','country','dob');
      	done(err);
      });
  });

  it('put not supported yet', function(done) {
    request(app)
      .put('/players')
      .expect(404, done);
  });
});

describe('/players/:id', function() {
  it('get method. success case. respond with json', function(done) {
    request(app)
      .get('/players/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('player');
      	res.body.player.should.have.keys('id','name','country','dob');
      	done(err);
      });
  });

  it('get method. 404 not found case. respond with json', function(done) {
    request(app)
      .get('/players/200')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err,res){
      	res.body.should.have.keys('err_code','message');
      	done(err);
      });
  });
});