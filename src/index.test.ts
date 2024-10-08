const request = require('supertest');
const { app } = require('./app');

describe('/', () => {
  it('returns `Hello World!`', async () => {
    const data = await request(app).get('/');
    expect(data.statusCode).toBe(200);
    expect(data.body.message).toBe('Hello World!');
  });
});