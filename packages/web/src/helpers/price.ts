import { RestaurantMenuType } from '@/types';
import { getIsBetweenByTime } from '@/helpers';

export const getDiscountPrice = (fullPrice: number, discountedPercent: number): number => {
	const RatioPrice = (100 - discountedPercent) / 100;
	return fullPrice * RatioPrice;
};

export const getDiscountPriceByMenu = (menu: RestaurantMenuType): number | null => {
	if (!menu?.discountedTimePeriod?.begin || !menu?.discountedTimePeriod?.end || menu?.discountedPercent) {
		return null;
	} else if (!getIsBetweenByTime(menu?.discountedTimePeriod.begin, menu?.discountedTimePeriod.end)) {
		return null;
	}

	return getDiscountPrice(menu.fullPrice, menu.discountedPercent);
};
