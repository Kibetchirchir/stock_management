import { Response } from 'express';
import request from 'supertest';
import app from '../app';
/**
 * helper for our tests request
 */
class SuperTestRequest {
  url: string;

  /**
   *
   * @param {string}urlPrefix
   * @param {string}endPoint
   */
  constructor(urlPrefix: string, endPoint: string) {
    this.url = `${urlPrefix}${endPoint}`;
  }

  /**
   * @param {object} object
   * @returns {Response | any} returns Response
   */
  async post(object: object): Promise<Response> {
    const res = await request(app)
      .post(`${this.url}`)
      .send(object);

    return (res as unknown) as Response;
  }
}

export default SuperTestRequest;
