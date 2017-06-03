const request = require('supertest');
const express = require('express');
const should = require('should');
var mock = require('mock-require');
 
var teamService = mock('../services/teamService.js',{
  getTeamById : function(id){ 
  	if (id>100)
  		return new Promise((resolve,reject)=>{
        resolve(null);
      });
  	
	team = { 
		'id' : id,
		'name' : 'manchester united',
		'country' : 'England',
		'team_type' : 'club'
	};
	return new Promise((resolve,reject)=>{
      resolve(team);
    });
  }
});
var teams = require('../controllers/teamController');

const app = express();
app.use('/teams',teams);

describe('/teams', function() {
  it('get method. success case. respond with json', function(done) {
    request(app)
      .get('/teams')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('offset','limit','total_results','teams');
      	res.body.teams[0].should.have.keys('id','name','country');
      	done(err);
      });
  });

  it('put not supported yet', function(done) {
    request(app)
      .put('/players')
      .expect(404, done);
  });
});

describe('/teams/:id', function() {
  it('get method. success case. respond with json', function(done) {
    request(app)
      .get('/teams/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('team');
      	res.body.team.should.have.keys('id','name','country');
      	done(err);
      });
  });

  it('get method. 404 not found case. respond with json', function(done) {
    request(app)
      .get('/teams/200')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err,res){
      	res.body.should.have.keys('err_code','message');
      	done(err);
      });
  });
});