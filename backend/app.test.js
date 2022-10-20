const request = require('supertest');
const app = require('./app.js');

describe('GET', () => {
  it('test /', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect({'hello':'world'});
  });

  it('test /friend', async () => {
    await request(app)
      .get('/friend')
      .expect(200)
      .expect({'hello':'friend1'});
  });

  // it('test /all', async () => {
  //   await request(app)
  //     .get('/all')
  //     .expect(200)
  //     .expect({'hello':'all'});
  // });
});