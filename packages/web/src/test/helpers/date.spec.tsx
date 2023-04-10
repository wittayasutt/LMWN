import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { getDateByTime, getIsBetweenByTime } from '../../helpers/date';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('getDateByTime', () => {
	test('given time = ""', () => {
		expect(getDateByTime('')).toBeNull();
	});

	test('given time = "0"', () => {
		expect(getDateByTime('0')).toBeNull();
	});

	test('given time = "1"', () => {
		expect(getDateByTime('1')).toBeNull();
	});

	test('given time = "04:00"', () => {
		expect(dayjs(getDateByTime('04:00')).toString()).toContain('21:00:00');
	});
});

describe('getIsBetweenByTime', () => {
	test('given start = "", end = ""', () => {
		expect(getIsBetweenByTime('', '')).toBeFalsy();
	});

	test('given start = "0", end = "0"', () => {
		expect(getIsBetweenByTime('0', '0')).toBeFalsy();
	});

	test('given start = "10:00", end = "12:00", now = "13:00"', () => {
		expect(getIsBetweenByTime('10:00', '12:00', '13:00')).toBeFalsy();
	});

	test('given start = "10:00", end = "12:00", now = "11:00"', () => {
		expect(getIsBetweenByTime('10:00', '12:00', '11:00')).toBeTruthy();
	});
});
