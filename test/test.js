var assert = require('assert');
const request = require('supertest');
const app = require ('../app');

describe('ORDERS GET (ADMIN)', function() {
  it('GET all orders', function(done) {
    request(app)
      .get('/admin?token=admin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER GET (ADMIN)', function() {
  it('GET an order by status', function(done) {
    request(app)
      .get('/admin/?token=admin&status=new')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER GET (ADMIN)', function() {
  it('GET an order by negative id', function(done) {
    request(app)
      .get('/admin/-2?token=admin')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER GET (ADMIN)', function() {
  it('GET an order by un unexistent id', function(done) {
    request(app)
      .get('/admin/1000?token=admin')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('PRODUCT GET (FOR ADMIN)', function() {
  it('GET a product by NaN', function(done) {
    request(app)
      .get('/admin/ciccio?token=admin')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER POST (USER)', function() {
  it('POST a new order', function(done) {
    request(app)
      .post('/?token=pippo')
      .set('Accept', 'application/json')
      .send ({dishes : 'Jalapenos', bill : 32})
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER DELETE (ADMIN)', function() {
  it('DELETE an order by id', function(done) {
    request(app)
      .delete('/admin/3?token=admin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER DELETE (ADMIN)', function() {
  it('DELETE an order by unexistent id', function(done) {
    request(app)
      .delete('/admin/1000?token=admin')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER DELETE', function() {
  it('DELETE an order by NaN', function(done) {
    request(app)
      .delete('/admin/10senj0?token=admin')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDER PUT (ADMIN)', function() {
  it('SET an order', function(done) {
    request(app)
      .put('/admin/2?token=admin')
      .set('Accept', 'application/json')
      .send({status : 'ready'})
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('ORDERS RESET', function() {
  it('RESET all orders', function(done) {
    request(app)
      .put('/admin?token=admin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});
