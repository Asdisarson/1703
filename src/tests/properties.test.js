const request = require('supertest');
const express = require('express');
const { mockData, mockDb } = require('./testHelper');

// Mock the database module
jest.mock('../config/database', () => mockDb);

// Create express app for testing
const app = express();
app.use(express.json());
app.use('/api/properties', require('../routes/properties'));

describe('Properties API Endpoints', () => {
  describe('GET /api/properties/occupancy', () => {
    it('should return land occupancy statistics', async () => {
      const res = await request(app).get('/api/properties/occupancy');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.occupancy);
    });
  });

  describe('GET /api/properties/rental-terms', () => {
    it('should return rental terms information', async () => {
      const res = await request(app).get('/api/properties/rental-terms');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.rentalTerms);
    });
  });

  describe('GET /api/properties/property-types', () => {
    it('should return property types statistics', async () => {
      const res = await request(app).get('/api/properties/property-types');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.propertyTypes);
    });

    it('should include all required property types', async () => {
      const res = await request(app).get('/api/properties/property-types');
      const data = res.body.data;
      expect(data).toHaveProperty('logbyli_count');
      expect(data).toHaveProperty('hjaleigur_count');
      expect(data).toHaveProperty('thurrabud_count');
      expect(data).toHaveProperty('husmenn_count');
    });
  });

  describe('GET /api/properties/property-value', () => {
    it('should return property value statistics', async () => {
      const res = await request(app).get('/api/properties/property-value');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.propertyValue);
    });

    it('should include statistics for both main properties and auxiliary farms', async () => {
      const res = await request(app).get('/api/properties/property-value');
      const propertyTypes = res.body.data.map(item => item.property_type);
      expect(propertyTypes).toContain('Lögbýli');
      expect(propertyTypes).toContain('Hjáleiga');
    });
  });

  describe('GET /api/properties/ownership', () => {
    it('should return property ownership statistics', async () => {
      const res = await request(app).get('/api/properties/ownership');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.ownership);
    });

    it('should include all ownership types', async () => {
      const res = await request(app).get('/api/properties/ownership');
      const ownershipTypes = res.body.data.map(item => item.ownership_type);
      expect(ownershipTypes).toContain('Konungseign');
      expect(ownershipTypes).toContain('Eign Hólastóls');
      expect(ownershipTypes).toContain('Eign Skálholtsstóls');
      expect(ownershipTypes).toContain('Beneficium');
      expect(ownershipTypes).toContain('Bændakirkja');
      expect(ownershipTypes).toContain('Einkaeign');
    });
  });

  describe('GET /api/properties/distribution', () => {
    it('should return property distribution statistics', async () => {
      const res = await request(app).get('/api/properties/distribution');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data).toEqual(mockData.distribution);
    });

    it('should return distribution in tenths', async () => {
      const res = await request(app).get('/api/properties/distribution');
      const data = res.body.data;
      expect(data.total_share).toBeLessThanOrEqual(10);
      expect(data.land_share).toBeLessThanOrEqual(10);
      expect(data.livestock_share).toBeLessThanOrEqual(10);
    });
  });

  // Error handling tests
  describe('Error Handling', () => {
    beforeEach(() => {
      mockDb.execute.mockClear();
    });

    it('should handle database errors', async () => {
      mockDb.execute.mockRejectedValueOnce(new Error('Database error'));
      const res = await request(app).get('/api/properties/occupancy');
      expect(res.status).toBe(500);
      expect(res.body.status).toBe('error');
    });

    it('should handle empty results', async () => {
      mockDb.execute.mockResolvedValueOnce([[]]);
      const res = await request(app).get('/api/properties/occupancy');
      expect(res.status).toBe(200);
      expect(res.body.data).toBeDefined();
    });
  });
}); 