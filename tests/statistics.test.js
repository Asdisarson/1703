const request = require('supertest');
const app = require('../src/app');

describe('Statistics Endpoints', () => {
  describe('GET /api/v1/statistics/demographics/age-gender', () => {
    it('should return age and gender statistics', async () => {
      const res = await request(app)
        .get('/api/v1/statistics/demographics/age-gender')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('Kyn');
      expect(res.body.data[0]).toHaveProperty('Kyn_txt');
      expect(res.body.data[0]).toHaveProperty('Aldur');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/statistics/demographics/marital-status', () => {
    it('should return marital status statistics', async () => {
      const res = await request(app)
        .get('/api/v1/statistics/demographics/marital-status')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('hjuskaparstada');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/statistics/households/sizes', () => {
    it('should return household size statistics', async () => {
      const res = await request(app)
        .get('/api/v1/statistics/households/sizes')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('household_size');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/statistics/households/types', () => {
    it('should return household type statistics', async () => {
      const res = await request(app)
        .get('/api/v1/statistics/households/types')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('household_type');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/statistics/status/household', () => {
    it('should return household status statistics', async () => {
      const res = await request(app)
        .get('/api/v1/statistics/status/household')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('household_status');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/statistics/status/occupational', () => {
    it('should return occupational status statistics', async () => {
      const res = await request(app)
        .get('/api/v1/statistics/status/occupational')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('occupation');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });
}); 