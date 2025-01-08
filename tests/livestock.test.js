const request = require('supertest');
const app = require('../src/app');

describe('Livestock Endpoints', () => {
  describe('GET /api/v1/livestock/cattle', () => {
    it('should return cattle statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/cattle')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total');
      expect(Array.isArray(res.body.data.details)).toBe(true);
      expect(res.body.data.details[0]).toHaveProperty('type');
      expect(res.body.data.details[0]).toHaveProperty('category');
      expect(res.body.data.details[0]).toHaveProperty('count');
      expect(res.body.data.details[0]).toHaveProperty('total_value');
    });
  });

  describe('GET /api/v1/livestock/sheep', () => {
    it('should return sheep statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/sheep')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total');
      expect(Array.isArray(res.body.data.details)).toBe(true);
      expect(res.body.data.details[0]).toHaveProperty('type');
      expect(res.body.data.details[0]).toHaveProperty('category');
      expect(res.body.data.details[0]).toHaveProperty('count');
      expect(res.body.data.details[0]).toHaveProperty('total_value');
    });
  });

  describe('GET /api/v1/livestock/goats', () => {
    it('should return goat statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/goats')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total');
      expect(Array.isArray(res.body.data.details)).toBe(true);
      expect(res.body.data.details[0]).toHaveProperty('type');
      expect(res.body.data.details[0]).toHaveProperty('category');
      expect(res.body.data.details[0]).toHaveProperty('count');
      expect(res.body.data.details[0]).toHaveProperty('total_value');
    });
  });

  describe('GET /api/v1/livestock/horses', () => {
    it('should return horse statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/horses')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total');
      expect(Array.isArray(res.body.data.details)).toBe(true);
      expect(res.body.data.details[0]).toHaveProperty('type');
      expect(res.body.data.details[0]).toHaveProperty('category');
      expect(res.body.data.details[0]).toHaveProperty('count');
      expect(res.body.data.details[0]).toHaveProperty('total_value');
    });
  });

  describe('GET /api/v1/livestock/owners', () => {
    it('should return livestock owner statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/owners')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('Einst_nr');
      expect(res.body.data[0]).toHaveProperty('Fullt_nafn');
      expect(res.body.data[0]).toHaveProperty('livestock_types');
      expect(res.body.data[0]).toHaveProperty('total_animals');
    });
  });

  describe('GET /api/v1/livestock/value', () => {
    it('should return livestock value statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/value')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total_value');
      expect(Array.isArray(res.body.data.details)).toBe(true);
      expect(res.body.data.details[0]).toHaveProperty('livestock_type');
      expect(res.body.data.details[0]).toHaveProperty('unit_value');
      expect(res.body.data.details[0]).toHaveProperty('count');
      expect(res.body.data.details[0]).toHaveProperty('total_value');
    });
  });

  describe('GET /api/v1/livestock/summary', () => {
    it('should return livestock summary statistics', async () => {
      const res = await request(app)
        .get('/api/v1/livestock/summary')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total_cattle');
      expect(res.body.data).toHaveProperty('total_sheep');
      expect(res.body.data).toHaveProperty('total_goats');
      expect(res.body.data).toHaveProperty('total_horses');
      expect(res.body.data).toHaveProperty('total_owners');
    });
  });
}); 