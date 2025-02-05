import 'jest-extended';

import { getTopDishes } from '../restaurant';
import { MOCK_RESTAURANT_MENU_1, MOCK_RESTAURANT_MENU_2 } from '../../mocks';

describe('getRestaurantTopDishes', () => {
	test('given top dish sold = 120, should return array with "แกงเขียวหวานทะเล"', async () => {
		const expectedResult = ['แกงเขียวหวานทะเล'];
		expect(getTopDishes(MOCK_RESTAURANT_MENU_1)).toEqual(expectedResult);
	});

	test('given top dish sold = 120, should return array with "โรตี แกงเขียวหวานหมู  ไก่" and "แกงเขียวหวานทะเล"', async () => {
		const expectedResult = ['โรตี แกงเขียวหวานหมู  ไก่', 'แกงเขียวหวานทะเล'];
		expect(getTopDishes(MOCK_RESTAURANT_MENU_2)).toEqual(expectedResult);
	});
});
