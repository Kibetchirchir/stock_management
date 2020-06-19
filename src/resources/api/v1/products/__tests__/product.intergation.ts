import app from '../../../../../app';
import request from 'supertest';
import {
  CREATED,
  SERVER_ERROR,
} from '../../../../../constants/response_status';
import SuperTestRequest from '../../../../../helper/supertest';

const urlPrefix = '/api/v1';

const productInstance = async (): Promise<Response> => {
  const testInstance = new SuperTestRequest(urlPrefix, '/products');
  const res = await testInstance.post({
    name: 'K-gas',
    description: 'K gas',
  });

  return (res as unknown) as Response;
};

describe('test products integration', () => {
  test('test adding product', async () => {
    const res = await productInstance();
    expect(res.status).toBe(CREATED);
  });
  test('test failed product adding', async () => {
    const res = await productInstance();
    expect(res.status).toBe(SERVER_ERROR);
  });
});
