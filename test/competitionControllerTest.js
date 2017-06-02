const request = require('supertest');
const express = require('express');
const should = require('should');
var mock = require('mock-require');
 
var competitionService = mock('../services/competitionService.js',{
  getCompetitionById : function(id){ 
  	if (id>100)
  		return null;
  	
	competition = { 
		id : id,
		name : 'Premier League',
		type : 'league',
		country : 'England',
		year : 1997
	};
	return competition;
  }
});
var competitions = require('../controllers/competitionController');

const app = express();
app.use('/competitions',competitions);

describe('/competitions', function() {
  it('get method. success case. respond with json', function(done) {
    request(app)
      .get('/competitions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('offset','limit','total_results','competitions');
      	res.body.competitions[0].should.have.keys('id','name','type','country','year');
      	done(err);
      });
  });

  it('put not supported yet', function(done) {
    request(app)
      .put('/players')
      .expect(404, done);
  });
});

describe('/competitions/:id', function() {
  it('get method. success case. respond with json', function(done) {
    request(app)
      .get('/competitions/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('competition');
      	res.body.competition.should.have.keys('id','name','type','country','year');
      	done(err);
      });
  });

  it('get method. 404 not found case. respond with json', function(done) {
    request(app)
      .get('/competitions/200')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err,res){
      	res.body.should.have.keys('err_code','message');
      	done(err);
      });
  });
});