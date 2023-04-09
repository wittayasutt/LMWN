import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

export const getDateByTime = (time: string): Dayjs => {
	const now = dayjs().format('DD:MM:YYYY');
	return dayjs(`${now} ${time}`, 'DD:MM:YYYY HH:mm');
};

export const getIsBetweenByTime = (start: string, end: string): boolean => {
	const now = dayjs();

	const startDate = getDateByTime(start);
	const endDate = getDateByTime(end);

	return dayjs(now).isBetween(startDate, endDate);
};
