import app from '../../../app';
import request from 'supertest';

const urlPrefix = '/api/v1';

describe('test the api', () => {
  test('api is woking', async () => {
    const res = await request(app).get(`${urlPrefix}/`);
    expect(res.text).toBe('hello world');
  });
});
