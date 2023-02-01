import {describe, expect, test} from '@jest/globals';
import request from 'supertest';
import express from 'express';
import routes from '../routes'

const app = express();
app.use(express.json());
app.use(routes);

describe('GET /users', () => {
    test('returns a list of users with the correct structure', async () => {
      const response = await request(app).get('/users');
  
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      response.body.forEach((user: any) => {
        expect(typeof user.name).toBe('string');
        expect(typeof user.tax).toBe('number');
        expect(user.tax).toBeGreaterThanOrEqual(10);
        expect(user.tax).toBeLessThanOrEqual(200);
      });
    });
  });