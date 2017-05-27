const request = require('supertest');
const express = require('express');
const should = require('should');
 
const app = express();
var routes = require('../routes');
routes(app);

describe('GET /players', function() {
  it('success case. respond with json', function(done) {
    request(app)
      .get('/players')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('put not supported yet', function(done) {
    request(app)
      .put('/players')
      .expect(404, done);
  });
});

describe('GET /players/:id', function() {
  it('success case. respond with json', function(done) {
    request(app)
      .get('/players/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      //.expect(200)
      .end(function(err,res){
      	res.body.should.have.keys('player');
      	res.body.player.should.have.keys('id','name','country','dob');
      	done();
      });
  });
});