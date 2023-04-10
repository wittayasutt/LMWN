import {
	transformRestaurantOption,
	transformRestaurant,
	transformRestaurantShortMenu,
	transformRestaurantFullMenu,
} from '../../transforms/restaurants';

describe('transformRestaurantOption', () => {
	test('given option = null', () => {
		expect(transformRestaurantOption(null)).toEqual({
			label: '',
			choices: [],
		});
	});

	test('given option = undefined', () => {
		expect(transformRestaurantOption(undefined)).toEqual({
			label: '',
			choices: [],
		});
	});

	test('given option = actual data', () => {
		const option = {
			label: 'ไข่',
			choices: [
				{
					label: 'ไข่ดาว',
				},
			],
		};

		expect(transformRestaurantOption(option)).toEqual({
			label: 'ไข่',
			choices: [
				{
					label: 'ไข่ดาว',
				},
			],
		});
	});
});

describe('transformRestaurant', () => {
	test('given res = null', () => {
		expect(transformRestaurant(null)).toEqual({
			name: '',
			id: 0,
			coverImage: '',
			menus: [],
			activeTimePeriod: {
				open: '',
				close: '',
			},
		});
	});

	test('given res = undefined', () => {
		expect(transformRestaurant(undefined)).toEqual({
			name: '',
			id: 0,
			coverImage: '',
			menus: [],
			activeTimePeriod: {
				open: '',
				close: '',
			},
		});
	});

	test('given res = actual data', () => {
		const res = {
			name: 'ลืมเคี้ยว',
			id: 567051,
			coverImage: 'https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg',
			activeTimePeriod: {
				open: '10:30',
				close: '20:00',
			},
			menus: ['ข้าวผัดปลาทู', 'โรตี แกงเขียวหวานหมู  ไก่'],
		};

		expect(transformRestaurant(res)).toEqual({
			name: 'ลืมเคี้ยว',
			id: 567051,
			coverImage: 'https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg',
			activeTimePeriod: {
				open: '10:30',
				close: '20:00',
			},
			menus: ['ข้าวผัดปลาทู', 'โรตี แกงเขียวหวานหมู  ไก่'],
		});
	});
});

describe('transformRestaurantShortMenu', () => {
	test('given res = null', () => {
		expect(transformRestaurantShortMenu(null)).toEqual({
			name: '',
			id: '',
			thumbnailImage: null,
			fullPrice: 0,
			discountedPercent: 0,
			discountedTimePeriod: {
				begin: null,
				end: null,
			},
			sold: 0,
			totalInStock: 0,
		});
	});

	test('given res = undefined', () => {
		expect(transformRestaurantShortMenu(undefined)).toEqual({
			name: '',
			id: '',
			thumbnailImage: null,
			fullPrice: 0,
			discountedPercent: 0,
			discountedTimePeriod: {
				begin: null,
				end: null,
			},
			sold: 0,
			totalInStock: 0,
		});
	});

	test('given res = actual data', () => {
		const res = {
			name: 'ข้าวผัดปลาทู',
			id: 'ข้าวผัดปลาทู',
			thumbnailImage: 'https://img.wongnai.com/p/100x100/2021/08/14/95cf2410d1734ca7905672446141a699.jpg',
			discountedPercent: 0,
			fullPrice: 80,
			sold: 100,
			totalInStock: 200,
		};

		expect(transformRestaurantShortMenu(res)).toEqual({
			name: 'ข้าวผัดปลาทู',
			id: 'ข้าวผัดปลาทู',
			thumbnailImage: 'https://img.wongnai.com/p/100x100/2021/08/14/95cf2410d1734ca7905672446141a699.jpg',
			fullPrice: 80,
			discountedPercent: 0,
			discountedTimePeriod: {
				begin: null,
				end: null,
			},
			sold: 100,
			totalInStock: 200,
		});
	});
});

describe('transformRestaurantFullMenu', () => {
	test('given res = null', () => {
		expect(transformRestaurantFullMenu(null)).toEqual({
			name: '',
			id: '',
			thumbnailImage: null,
			fullPrice: 0,
			discountedPercent: 0,
			discountedTimePeriod: {
				begin: null,
				end: null,
			},
			sold: 0,
			totalInStock: 0,
			largeImage: null,
			options: [],
		});
	});

	test('given res = undefined', () => {
		expect(transformRestaurantFullMenu(undefined)).toEqual({
			name: '',
			id: '',
			thumbnailImage: null,
			fullPrice: 0,
			discountedPercent: 0,
			discountedTimePeriod: {
				begin: null,
				end: null,
			},
			sold: 0,
			totalInStock: 0,
			largeImage: null,
			options: [],
		});
	});

	test('given res = actual data', () => {
		const res = {
			name: 'โรตี แกงเขียวหวานหมู  ไก่',
			id: 'โรตี แกงเขียวหวานหมู  ไก่',
			thumbnailImage: 'https://img.wongnai.com/p/100x100/2021/08/14/78da01c38b34401b944aedad1abc94a1.jpg',
			discountedPercent: 0,
			sold: 100,
			fullPrice: 120,
			totalInStock: 200,
			options: [
				{
					label: 'เนื้อสัตว์ (แกงเขียวหวาน)',
					choices: [
						{
							label: 'หมู',
						},
						{
							label: 'ไก่',
						},
					],
				},
			],
			largeImage: 'https://img.wongnai.com/p/1920x0/2021/08/14/78da01c38b34401b944aedad1abc94a1.jpg',
		};

		expect(transformRestaurantFullMenu(res)).toEqual({
			name: 'โรตี แกงเขียวหวานหมู  ไก่',
			id: 'โรตี แกงเขียวหวานหมู  ไก่',
			thumbnailImage: 'https://img.wongnai.com/p/100x100/2021/08/14/78da01c38b34401b944aedad1abc94a1.jpg',
			fullPrice: 120,
			discountedPercent: 0,
			discountedTimePeriod: {
				begin: null,
				end: null,
			},
			sold: 100,
			totalInStock: 200,
			largeImage: 'https://img.wongnai.com/p/1920x0/2021/08/14/78da01c38b34401b944aedad1abc94a1.jpg',
			options: [
				{
					label: 'เนื้อสัตว์ (แกงเขียวหวาน)',
					choices: [
						{
							label: 'หมู',
						},
						{
							label: 'ไก่',
						},
					],
				},
			],
		});
	});
});
