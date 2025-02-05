import 'jest-extended';
import request from 'supertest';

import app from '../../../app';

const RESTAURANT_ID_1 = 567051;
const RESTAURANT_ID_2 = 227018;

describe('getRestaurantTopDishes', () => {
	test('getRestaurantTopDishes by correct id 1', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_1}/topDishes`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body).toBeArray;
		expect(typeof body[0]).toBeString;
	});

	test('getRestaurantTopDishes by correct id 2', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_2}/topDishes`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body).toBeArray;
		expect(typeof body[0]).toBeString;
	});

	test('getRestaurantTopDishes by incorrect id', async () => {
		const res = await request(app).get(`/restaurants/1`);
		const { status } = res;

		expect(status).toBe(404);
	});

	afterAll((done) => {
		done();
	});
});
