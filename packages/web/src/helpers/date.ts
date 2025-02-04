import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

export const getDateByTime = (time: string): Dayjs | null => {
	const now = dayjs().format('DD:MM:YYYY');
	const formattedDate = dayjs(`${now} ${time}`, 'DD:MM:YYYY HH:mm');

	if (!formattedDate.isValid()) {
		return null;
	}

	return formattedDate;
};

export const getIsBetweenByTime = (start: string, end: string): boolean => {
	const now = dayjs();

	const startDate = getDateByTime(start);
	const endDate = getDateByTime(end);

	return dayjs(now).isBetween(startDate, endDate);
};
