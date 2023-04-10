import { RestaurantOptionType, RestaurantType, RestaurantMenuType } from '@/types/restaurants';

export const transformRestaurantOption = (option: any): RestaurantOptionType => {
	return {
		label: option?.label || '',
		choices:
			option?.choices?.map((choice: any) => ({
				label: choice.label,
			})) || [],
	};
};

export const transformRestaurant = (res: any): RestaurantType => {
	return {
		name: res?.name || '',
		id: res?.id || 0,
		coverImage: res?.coverImage || '',
		menus: res?.menus || [],
		activeTimePeriod: {
			open: res?.activeTimePeriod?.open || '',
			close: res?.activeTimePeriod?.close || '',
		},
	};
};

export const transformRestaurantShortMenu = (res: any): RestaurantMenuType => {
	return {
		name: res?.name || '',
		id: res?.id || '',
		thumbnailImage: res?.thumbnailImage || null,
		fullPrice: res?.fullPrice || 0,
		discountedPercent: res?.discountedPercent || 0,
		discountedTimePeriod: {
			begin: res?.discountedTimePeriod?.begin ?? null,
			end: res?.discountedTimePeriod?.end ?? null,
		},
		sold: res?.sold || 0,
		totalInStock: res?.totalInStock || 0,
	};
};

export const transformRestaurantFullMenu = (res: any): RestaurantMenuType => {
	return {
		name: res?.name || '',
		id: res?.id || '',
		thumbnailImage: res?.thumbnailImage || null,
		fullPrice: res?.fullPrice || 0,
		discountedPercent: res?.discountedPercent || 0,
		discountedTimePeriod: {
			begin: res?.discountedTimePeriod?.begin ?? null,
			end: res?.discountedTimePeriod?.end ?? null,
		},
		sold: res?.sold || 0,
		totalInStock: res?.totalInStock || 0,
		largeImage: res?.largeImage || null,
		options: res?.options?.map(transformRestaurantOption) || [],
	};
};
