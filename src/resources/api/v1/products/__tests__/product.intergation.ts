import app from '../../../../../app';
import request from 'supertest';
import { CREATED } from '../../../../../constants/response_status';

const urlPrefix = '/api/v1';

describe('test products integration', () => {
  test('test adding product', async () => {
    const res = await request(app)
      .post(`${urlPrefix}/products`)
      .send({
        name: 'K-gas',
        description: 'K gas',
      });

    expect(res.status).toBe(CREATED);
  });
});
