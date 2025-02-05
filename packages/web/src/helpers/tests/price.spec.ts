import { mockRestaurantMenu } from '@/mocks';
import { getDiscountPrice, getDiscountPriceByMenu } from '../price';

describe('getDiscountPrice', () => {
	test('given fullPrice = 100, discountedPercent = 0, should get discountPrice = 100', () => {
		expect(getDiscountPrice(100, 0)).toEqual(100);
	});

	test('given fullPrice = 100, discountedPercent = 50, should get discountPrice = 500', () => {
		expect(getDiscountPrice(100, 50)).toEqual(50);
	});

	test('given fullPrice = 100, discountedPercent = 25, should get discountPrice = 75', () => {
		expect(getDiscountPrice(100, 25)).toEqual(75);
	});

	test('given fullPrice = 100, discountedPercent = 12.5, should get discountPrice = 87.5', () => {
		expect(getDiscountPrice(100, 12.5)).toEqual(87.5);
	});
});

describe('getDiscountPriceByMenu', () => {
	test('given no discountedTimePeriod, should get null', () => {
		expect(getDiscountPriceByMenu(mockRestaurantMenu)).toBeNull();
	});

	test("given no discountedTimePeriod's begin time, should get null", () => {
		const menu = {
			...mockRestaurantMenu,
			discountedPercent: 50,
			discountedTimePeriod: {
				begin: '',
				end: '12:00',
			},
		};

		const now = '11:00';

		expect(getDiscountPriceByMenu(menu, now)).toBeNull();
	});

	test("given no discountedTimePeriod's end time, should get null", () => {
		const menu = {
			...mockRestaurantMenu,
			discountedPercent: 50,
			discountedTimePeriod: {
				begin: '10:00',
				end: '',
			},
		};

		const now = '11:00';

		expect(getDiscountPriceByMenu(menu, now)).toBeNull();
	});

	test('given no discountedPercent, should get null', () => {
		const menu = {
			...mockRestaurantMenu,
			discountedTimePeriod: {
				begin: '10:00',
				end: '12:00',
			},
		};

		const now = '11:00';

		expect(getDiscountPriceByMenu(menu, now)).toBeNull();
	});

	test("given it doesn't on discountedTimePeriod, should get null", () => {
		const menu = {
			...mockRestaurantMenu,
			discountedPercent: 50,
			discountedTimePeriod: {
				begin: '10:00',
				end: '12:00',
			},
		};

		const now = '13:00';

		expect(getDiscountPriceByMenu(menu, now)).toBeNull();
	});

	test('given discountedPercent = 50, should get 50% of full price', () => {
		const menu = {
			...mockRestaurantMenu,
			discountedPercent: 50,
			discountedTimePeriod: {
				begin: '10:00',
				end: '12:00',
			},
		};

		const now = '11:00';
		const expectedPrice = (menu.fullPrice * (100 - menu.discountedPercent)) / 100;

		expect(getDiscountPriceByMenu(menu, now)).toEqual(expectedPrice);
	});

	test('given discountedPercent = 25, should get 75% of full price', () => {
		const menu = {
			...mockRestaurantMenu,
			discountedPercent: 25,
			discountedTimePeriod: {
				begin: '10:00',
				end: '12:00',
			},
		};

		const now = '11:00';
		const expectedPrice = (menu.fullPrice * (100 - menu.discountedPercent)) / 100;

		expect(getDiscountPriceByMenu(menu, now)).toEqual(expectedPrice);
	});
});
