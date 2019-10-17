const chai = require('chai');
const request = require('supertest');

const app = require('../../app');

const { expect } = chai;

describe('Home Controller', () => {
  describe('GET /home', () => {
    it('should return 200 status and expected response', () => request(app)
      .get('/home')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.home).to.equal('valid');
      }));
  });
});
