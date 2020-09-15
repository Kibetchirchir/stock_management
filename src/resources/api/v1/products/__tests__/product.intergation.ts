import {
  CREATED,
  SERVER_ERROR,
  OK,
} from '../../../../../constants/response_status';
import SuperTestRequest from '../../../../../helper/supertest';

const urlPrefix = '/api/v1';

const testProductInstance = new SuperTestRequest(urlPrefix, '/products');

const testProductInstanceWithId = new SuperTestRequest(
  urlPrefix,
  '/products/1',
);

const productInstance = async (): Promise<Response> => {
  const res = await testProductInstance.post({
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

  test('get all products', async () => {
    const res = await testProductInstance.get();
    expect(res.status).toBe(OK);
  });

  test('get one product', async () => {
    const res = await testProductInstanceWithId.get();
    expect(res.status).toBe(OK);
  });
});
