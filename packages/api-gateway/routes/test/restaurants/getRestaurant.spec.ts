import 'jest-extended';
import request from 'supertest';

import app from '../../../index';

const RESTAURANT_ID_1 = 567051;
const RESTAURANT_ID_2 = 227018;

describe('getRestaurant', () => {
	test('getRestaurant by correct id 1', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_1}`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body.name).toBeString;
		expect(typeof body.id).toBeNumber;
		expect(typeof body.coverImage).toBeString;
		expect(typeof body.menus).toBeArray;

		// activeTimePeriod
		expect(typeof body.activeTimePeriod).toBeObject;
		expect(typeof body.activeTimePeriod.open).toBeString;
		expect(typeof body.activeTimePeriod.close).toBeString;
	});

	test('getRestaurant by correct id 2', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_2}`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body.name).toBeString;
		expect(typeof body.id).toBeNumber;
		expect(typeof body.coverImage).toBeString;
		expect(typeof body.menus).toBeArray;

		// activeTimePeriod
		expect(typeof body.activeTimePeriod).toBeObject;
		expect(typeof body.activeTimePeriod.open).toBeString;
		expect(typeof body.activeTimePeriod.close).toBeString;
	});

	test('getRestaurant by incorrect id', async () => {
		const res = await request(app).get(`/restaurants/1`);
		const { status } = res;

		expect(status).toBe(404);
	});

	afterAll((done) => {
		done();
	});
});
