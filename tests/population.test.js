const request = require('supertest');
const app = require('../src/app');

describe('Population Endpoints', () => {
  describe('GET /api/v1/population/total', () => {
    it('should return total population count', async () => {
      const res = await request(app)
        .get('/api/v1/population/total')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total');
    });
  });

  describe('GET /api/v1/population/by-district', () => {
    it('should return population by district', async () => {
      const res = await request(app)
        .get('/api/v1/population/by-district')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('Hreppur_nr');
      expect(res.body.data[0]).toHaveProperty('Hreppur_nafn');
      expect(res.body.data[0]).toHaveProperty('population');
    });
  });

  describe('GET /api/v1/population/by-county', () => {
    it('should return population by county', async () => {
      const res = await request(app)
        .get('/api/v1/population/by-county')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('Sysla_nr');
      expect(res.body.data[0]).toHaveProperty('Sysla_nafn_langt');
      expect(res.body.data[0]).toHaveProperty('population');
    });
  });
}); 