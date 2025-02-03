import 'jest-extended';
import request from 'supertest';

import app from '../../../index';

// constant
const RESTAURANT_ID_1 = 567051;
const RESTAURANT_ID_1_MENU_1 = encodeURI('ข้าวผัดปลาทู');
const RESTAURANT_ID_1_MENU_2 = encodeURI('โรตี แกงเขียวหวานหมู  ไก่');

const RESTAURANT_ID_2 = 227018;
const RESTAURANT_ID_2_MENU_1 = encodeURI('Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว');
const RESTAURANT_ID_2_MENU_2 = encodeURI('Set A กะเพราหมูสับไข่ดาว + กาแฟ');

describe('getRestaurantFullMenu', () => {
	test('getRestaurantFullMenu by correct id 1 menu 1', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_1}/menus/${RESTAURANT_ID_1_MENU_1}/full`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body.name).toBeString;
		expect(typeof body.id).toBeString;
		expect(typeof body.thumbnailImage).toBeOneOf(['string', 'undefined']);
		expect(typeof body.fullPrice).toBeNumber;
		expect(typeof body.discountedPercent).toBeNumber;
		expect(typeof body.sold).toBeNumber;
		expect(typeof body.totalInStock).toBeNumber;
		expect(typeof body.largeImage).toBeOneOf(['string', 'undefined']);

		// discountedTimePeriod
		expect(typeof body.discountedTimePeriod).toBeOneOf(['object', 'undefined']);
		if (body.discountedTimePeriod) {
			expect(typeof body.discountedTimePeriod.begin).toBeString;
			expect(typeof body.discountedTimePeriod.end).toBeString;
		}

		// options
		expect(typeof body.options).toBeArray;
		if (body.options && body.options[0]) {
			expect(typeof body.options[0]).toBeObject;
			expect(typeof body.options[0].label).toBeString;

			expect(typeof body.options[0].choices).toBeArray;
			expect(typeof body.options[0].choices[0]).toBeObject;
			expect(typeof body.options[0].choices[0].label).toBeString;
		}
	});

	test('getRestaurantFullMenu by correct id 1 menu 2', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_1}/menus/${RESTAURANT_ID_1_MENU_2}/full`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body.name).toBeString;
		expect(typeof body.id).toBeString;
		expect(typeof body.thumbnailImage).toBeOneOf(['string', 'undefined']);
		expect(typeof body.fullPrice).toBeNumber;
		expect(typeof body.discountedPercent).toBeNumber;
		expect(typeof body.sold).toBeNumber;
		expect(typeof body.totalInStock).toBeNumber;
		expect(typeof body.largeImage).toBeOneOf(['string', 'undefined']);

		// discountedTimePeriod
		expect(typeof body.discountedTimePeriod).toBeOneOf(['object', 'undefined']);
		if (body.discountedTimePeriod) {
			expect(typeof body.discountedTimePeriod.begin).toBeString;
			expect(typeof body.discountedTimePeriod.end).toBeString;
		}

		// options
		expect(typeof body.options).toBeArray;
		if (body.options && body.options[0]) {
			expect(typeof body.options[0]).toBeObject;
			expect(typeof body.options[0].label).toBeString;

			expect(typeof body.options[0].choices).toBeArray;
			expect(typeof body.options[0].choices[0]).toBeObject;
			expect(typeof body.options[0].choices[0].label).toBeString;
		}
	});

	test('getRestaurantFullMenu by correct id 2 menu 1', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_2}/menus/${RESTAURANT_ID_2_MENU_1}/full`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body.name).toBeString;
		expect(typeof body.id).toBeString;
		expect(typeof body.thumbnailImage).toBeOneOf(['string', 'undefined']);
		expect(typeof body.fullPrice).toBeNumber;
		expect(typeof body.discountedPercent).toBeNumber;
		expect(typeof body.sold).toBeNumber;
		expect(typeof body.totalInStock).toBeNumber;
		expect(typeof body.largeImage).toBeOneOf(['string', 'undefined']);

		// discountedTimePeriod
		expect(typeof body.discountedTimePeriod).toBeOneOf(['object', 'undefined']);
		if (body.discountedTimePeriod) {
			expect(typeof body.discountedTimePeriod.begin).toBeString;
			expect(typeof body.discountedTimePeriod.end).toBeString;
		}

		// options
		expect(typeof body.options).toBeArray;
		if (body.options && body.options[0]) {
			expect(typeof body.options[0]).toBeObject;
			expect(typeof body.options[0].label).toBeString;

			expect(typeof body.options[0].choices).toBeArray;
			expect(typeof body.options[0].choices[0]).toBeObject;
			expect(typeof body.options[0].choices[0].label).toBeString;
		}
	});

	test('getRestaurantFullMenu by correct id 2 menu 2', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_2}/menus/${RESTAURANT_ID_2_MENU_2}/full`);
		const { body, status } = res;

		expect(status).toBe(200);

		// Check the data itself
		expect(typeof body).toBeObject;
		expect(body).not.toBeNull();

		// Check data's properties
		expect(typeof body.name).toBeString;
		expect(typeof body.id).toBeString;
		expect(typeof body.thumbnailImage).toBeOneOf(['string', 'undefined']);
		expect(typeof body.fullPrice).toBeNumber;
		expect(typeof body.discountedPercent).toBeNumber;
		expect(typeof body.sold).toBeNumber;
		expect(typeof body.totalInStock).toBeNumber;
		expect(typeof body.largeImage).toBeOneOf(['string', 'undefined']);

		// discountedTimePeriod
		expect(typeof body.discountedTimePeriod).toBeOneOf(['object', 'undefined']);
		if (body.discountedTimePeriod) {
			expect(typeof body.discountedTimePeriod.begin).toBeString;
			expect(typeof body.discountedTimePeriod.end).toBeString;
		}

		// options
		expect(typeof body.options).toBeArray;
		if (body.options && body.options[0]) {
			expect(typeof body.options[0]).toBeObject;
			expect(typeof body.options[0].label).toBeString;

			expect(typeof body.options[0].choices).toBeArray;
			expect(typeof body.options[0].choices[0]).toBeObject;
			expect(typeof body.options[0].choices[0].label).toBeString;
		}
	});

	test('getRestaurantFullMenu by incorrect id', async () => {
		const res = await request(app).get(`/restaurants/1/menus/${RESTAURANT_ID_1_MENU_1}/full`);
		const { status } = res;

		expect(status).toBe(404);
	});

	test('getRestaurantFullMenu by incorrect menu', async () => {
		const res = await request(app).get(`/restaurants/${RESTAURANT_ID_1}/menus/1/full`);
		const { status } = res;

		expect(status).toBe(404);
	});

	test('getRestaurantFullMenu by incorrect id and menu', async () => {
		const res = await request(app).get(`/restaurants/1/menus/1/full`);
		const { status } = res;

		expect(status).toBe(404);
	});

	afterAll((done) => {
		done();
	});
});
