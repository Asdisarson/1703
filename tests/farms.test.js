const request = require('supertest');
const app = require('../src/app');

describe('Farm Statistics Endpoints', () => {
  describe('GET /api/v1/farms/occupancy', () => {
    it('should return farm occupancy statistics', async () => {
      const res = await request(app)
        .get('/api/v1/farms/occupancy')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('inhabited');
      expect(res.body.data).toHaveProperty('abandoned');
      expect(res.body.data).toHaveProperty('owner_occupied');
      expect(res.body.data).toHaveProperty('tenant_occupied');
    });
  });

  describe('GET /api/v1/farms/rental-terms', () => {
    it('should return rental terms statistics', async () => {
      const res = await request(app)
        .get('/api/v1/farms/rental-terms')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('land_rent');
      expect(res.body.data[0]).toHaveProperty('count');
      expect(res.body.data[0]).toHaveProperty('average_additional_rent');
    });
  });

  describe('GET /api/v1/farms/property-types', () => {
    it('should return property type statistics', async () => {
      const res = await request(app)
        .get('/api/v1/farms/property-types')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('property_type');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/farms/property-values', () => {
    it('should return property value statistics', async () => {
      const res = await request(app)
        .get('/api/v1/farms/property-values')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('property_type');
      expect(res.body.data[0]).toHaveProperty('average_value');
      expect(res.body.data[0]).toHaveProperty('min_value');
      expect(res.body.data[0]).toHaveProperty('max_value');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/farms/ownership', () => {
    it('should return ownership statistics', async () => {
      const res = await request(app)
        .get('/api/v1/farms/ownership')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('ownership_type');
      expect(res.body.data[0]).toHaveProperty('count');
    });
  });

  describe('GET /api/v1/farms/distribution', () => {
    it('should return property distribution statistics', async () => {
      const res = await request(app)
        .get('/api/v1/farms/distribution')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('total_share');
      expect(res.body.data).toHaveProperty('land_share');
      expect(res.body.data).toHaveProperty('livestock_share');
    });
  });

  describe('GET /api/v1/farms/:byliNr', () => {
    it('should return detailed farm information', async () => {
      const res = await request(app)
        .get('/api/v1/farms/1') // Testing with byli_nr = 1
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.status).toBe('success');
      expect(res.body.data).toHaveProperty('Byli_nr');
      expect(res.body.data).toHaveProperty('Byli_nafn');
      expect(res.body.data).toHaveProperty('farm_type');
      expect(res.body.data).toHaveProperty('value');
      expect(res.body.data).toHaveProperty('rent');
      expect(res.body.data).toHaveProperty('occupancy_type');
    });

    it('should return 404 for non-existent farm', async () => {
      await request(app)
        .get('/api/v1/farms/999999')
        .expect('Content-Type', /json/)
        .expect(404);
    });
  });
}); 