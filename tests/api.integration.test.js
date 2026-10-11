const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('GET /api/hex-to-rgb (integration tests)', () => {
  it('returns 200 and RGB JSON for a valid colour', async () => {
    const response = await request(app).get('/api/hex-to-rgb').query({ hex: '#FF8800' });
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ hex: '#FF8800', rgb: { r: 255, g: 136, b: 0 } });
  });
  it('returns 400 with an error message for invalid input', async () => {
    const response = await request(app).get('/api/hex-to-rgb').query({ hex: 'oops' });
    expect(response.status).to.equal(400);
    expect(response.body.error).to.be.a('string');
  });
  it('returns 400 when the required query parameter is missing', async () => {
    const response = await request(app).get('/api/hex-to-rgb');
    expect(response.status).to.equal(400);
    expect(response.body.error).to.include('string');
  });
});
