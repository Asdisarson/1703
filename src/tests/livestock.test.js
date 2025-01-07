const request = require('supertest');
const express = require('express');
const { mockData, mockDb } = require('./testHelper');

// Mock the database module
jest.mock('../config/database', () => mockDb);

// Create express app for testing
const app = express();
app.use(express.json());
app.use('/api/livestock', require('../routes/livestock'));

describe('Livestock API Endpoints', () => {
  describe('GET /api/livestock/cattle', () => {
    it('should return cattle statistics', async () => {
      const res = await request(app).get('/api/livestock/cattle');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.cattle);
    });

    it('should include all cattle types', async () => {
      const res = await request(app).get('/api/livestock/cattle');
      const data = res.body.data;
      expect(data).toHaveProperty('cows');
      expect(data).toHaveProperty('heifers');
      expect(data).toHaveProperty('dry_cattle');
      expect(data).toHaveProperty('calves');
    });
  });

  describe('GET /api/livestock/sheep', () => {
    it('should return sheep statistics', async () => {
      const res = await request(app).get('/api/livestock/sheep');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.sheep);
    });

    it('should include all sheep types', async () => {
      const res = await request(app).get('/api/livestock/sheep');
      const data = res.body.data;
      expect(data).toHaveProperty('ewes');
      expect(data).toHaveProperty('rams');
      expect(data).toHaveProperty('yearling_sheep');
      expect(data).toHaveProperty('lambs');
    });
  });

  describe('GET /api/livestock/goats', () => {
    it('should return goat statistics', async () => {
      const res = await request(app).get('/api/livestock/goats');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.goats);
    });

    it('should include all goat types', async () => {
      const res = await request(app).get('/api/livestock/goats');
      const data = res.body.data;
      expect(data).toHaveProperty('goats');
      expect(data).toHaveProperty('bucks');
      expect(data).toHaveProperty('yearling_goats');
      expect(data).toHaveProperty('kids');
    });
  });

  describe('GET /api/livestock/horses', () => {
    it('should return horse statistics', async () => {
      const res = await request(app).get('/api/livestock/horses');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.horses);
    });

    it('should include all horse types', async () => {
      const res = await request(app).get('/api/livestock/horses');
      const data = res.body.data;
      expect(data).toHaveProperty('stallions_geldings');
      expect(data).toHaveProperty('mares');
      expect(data).toHaveProperty('young_horses');
    });
  });

  describe('GET /api/livestock/owners', () => {
    it('should return livestock owner information', async () => {
      const res = await request(app).get('/api/livestock/owners');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.livestockOwners);
    });

    it('should include owner details', async () => {
      const res = await request(app).get('/api/livestock/owners');
      const owner = res.body.data[0];
      expect(owner).toHaveProperty('Einst_nr');
      expect(owner).toHaveProperty('Fullt_nafn');
      expect(owner).toHaveProperty('livestock_types');
      expect(owner).toHaveProperty('total_animals');
    });
  });

  describe('GET /api/livestock/value', () => {
    it('should return livestock value information', async () => {
      const res = await request(app).get('/api/livestock/value');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.livestockValue);
    });

    it('should include total value and breakdown', async () => {
      const res = await request(app).get('/api/livestock/value');
      const data = res.body.data;
      expect(data).toHaveProperty('total_value');
      expect(data).toHaveProperty('breakdown');
      expect(Array.isArray(data.breakdown)).toBe(true);
    });
  });

  describe('GET /api/livestock/summary', () => {
    it('should return summary statistics', async () => {
      const res = await request(app).get('/api/livestock/summary');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.livestockSummary);
    });

    it('should include all summary fields', async () => {
      const res = await request(app).get('/api/livestock/summary');
      const data = res.body.data;
      expect(data).toHaveProperty('total_cattle');
      expect(data).toHaveProperty('total_sheep');
      expect(data).toHaveProperty('total_goats');
      expect(data).toHaveProperty('total_horses');
      expect(data).toHaveProperty('total_owners');
    });
  });

  // Error handling tests
  describe('Error Handling', () => {
    beforeEach(() => {
      mockDb.execute.mockClear();
    });

    it('should handle database errors', async () => {
      mockDb.execute.mockRejectedValueOnce(new Error('Database error'));
      const res = await request(app).get('/api/livestock/cattle');
      expect(res.status).toBe(500);
      expect(res.body.status).toBe('error');
    });

    it('should handle empty results', async () => {
      mockDb.execute.mockResolvedValueOnce([[]]);
      const res = await request(app).get('/api/livestock/cattle');
      expect(res.status).toBe(200);
      expect(res.body.data).toBeDefined();
    });
  });
}); 