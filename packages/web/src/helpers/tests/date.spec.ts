import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { getDateByTime, getIsBetweenByTime } from '../date';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('getDateByTime', () => {
	test('given time = "", should get null', () => {
		expect(getDateByTime('')).toBeNull();
	});

	test('given time = "0", should get null', () => {
		expect(getDateByTime('0')).toBeNull();
	});

	test('given time = "1", should get null', () => {
		expect(getDateByTime('1')).toBeNull();
	});

	test('given time = "04:00", should get 21:00:00 at UTC+7 timezone', () => {
		expect(dayjs(getDateByTime('04:00')).toString()).toContain('21:00:00');
	});
});

describe('getIsBetweenByTime', () => {
	test('given start = "", end = "", should get false', () => {
		expect(getIsBetweenByTime('', '')).toBeFalsy();
	});

	test('given start = "0", end = "0", should get false', () => {
		expect(getIsBetweenByTime('0', '0')).toBeFalsy();
	});

	test('given start = "10:00", end = "12:00", now = "13:00", should get false', () => {
		expect(getIsBetweenByTime('10:00', '12:00', '13:00')).toBeFalsy();
	});

	test('given start = "10:00", end = "12:00", now = "11:00", should get true', () => {
		expect(getIsBetweenByTime('10:00', '12:00', '11:00')).toBeTruthy();
	});
});
