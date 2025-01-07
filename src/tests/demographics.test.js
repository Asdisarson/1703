const request = require('supertest');
const express = require('express');
const { mockData, mockDb } = require('./testHelper');

// Mock the database module
jest.mock('../config/database', () => mockDb);

// Create express app for testing
const app = express();
app.use(express.json());
app.use('/api/demographics', require('../routes/demographics'));

describe('Demographics API Endpoints', () => {
  describe('GET /api/demographics/population/districts', () => {
    it('should return population by districts', async () => {
      const res = await request(app).get('/api/demographics/population/districts');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.districts);
    });
  });

  describe('GET /api/demographics/population/counties', () => {
    it('should return population by counties', async () => {
      const res = await request(app).get('/api/demographics/population/counties');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.counties);
    });
  });

  describe('GET /api/demographics/population/age-gender', () => {
    it('should return population by age and gender', async () => {
      const res = await request(app).get('/api/demographics/population/age-gender');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.ageGender);
    });
  });

  describe('GET /api/demographics/marital-status', () => {
    it('should return marital status statistics', async () => {
      const res = await request(app).get('/api/demographics/marital-status');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.maritalStatus);
    });
  });

  describe('GET /api/demographics/households/size', () => {
    it('should return household size statistics', async () => {
      const res = await request(app).get('/api/demographics/households/size');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.householdSizes);
    });
  });

  describe('GET /api/demographics/households/type', () => {
    it('should return household type statistics', async () => {
      const res = await request(app).get('/api/demographics/households/type');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.householdTypes);
    });
  });

  describe('GET /api/demographics/households/heads', () => {
    it('should return household heads statistics', async () => {
      const res = await request(app).get('/api/demographics/households/heads');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.householdHeads);
    });
  });

  describe('GET /api/demographics/household-status', () => {
    it('should return household status statistics', async () => {
      const res = await request(app).get('/api/demographics/household-status');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.householdStatus);
    });
  });

  describe('GET /api/demographics/occupational-status', () => {
    it('should return occupational status statistics', async () => {
      const res = await request(app).get('/api/demographics/occupational-status');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.occupationalStatus);
    });
  });

  // Error handling tests
  describe('Error Handling', () => {
    beforeEach(() => {
      mockDb.execute.mockClear();
    });

    it('should handle database errors', async () => {
      mockDb.execute.mockRejectedValueOnce(new Error('Database error'));
      const res = await request(app).get('/api/demographics/population/districts');
      expect(res.status).toBe(500);
      expect(res.body.status).toBe('error');
    });

    it('should handle empty results', async () => {
      mockDb.execute.mockResolvedValueOnce([[]]);
      const res = await request(app).get('/api/demographics/population/districts');
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual([]);
    });
  });
}); 