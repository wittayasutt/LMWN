import { getDiscountPrice } from '../../helpers/price';

describe('getDiscountPrice', () => {
	test('given fullPrice = 100, discountedPercent = 0', () => {
		expect(getDiscountPrice(100, 0)).toEqual(100);
	});

	test('given fullPrice = 100, discountedPercent = 50', () => {
		expect(getDiscountPrice(100, 50)).toEqual(50);
	});

	test('given fullPrice = 100, discountedPercent = 25', () => {
		expect(getDiscountPrice(100, 25)).toEqual(75);
	});

	test('given fullPrice = 100, discountedPercent = 12.5', () => {
		expect(getDiscountPrice(100, 12.5)).toEqual(87.5);
	});
});
