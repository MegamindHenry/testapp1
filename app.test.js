const request = require('supertest');
const app = require('./app.js');

describe('GET /', () => {
  it('test /', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect({"hello":"world"});
  });
});