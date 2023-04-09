import { RestaurantOptionType, RestaurantType, RestaurantMenuType } from '@/types/restaurants';

export const transformRestaurantOption = (option: any): RestaurantOptionType => {
	return {
		label: option.label,
		choices: option.choices.map((choice: any) => ({
			label: choice.label,
		})),
	};
};

export const transformRestaurant = (res: any): RestaurantType => {
	return {
		name: res.name,
		id: res.id,
		coverImage: res.coverImage,
		menus: res.menus,
		activeTimePeriod: {
			open: res.activeTimePeriod.open,
			close: res.activeTimePeriod.close,
		},
	};
};

export const transformRestaurantShortMenu = (res: any): RestaurantMenuType => {
	return {
		name: res.name,
		id: res.id,
		thumbnailImage: res.thumbnailImage || null,
		fullPrice: res.fullPrice,
		discountedPercent: res.discountedPercent,
		discountedTimePeriod: {
			begin: res.discountedTimePeriod?.begin ?? null,
			end: res.discountedTimePeriod?.end ?? null,
		},
		sold: res.sold,
		totalInStock: res.totalInStock,
	};
};

export const transformRestaurantFullMenu = (res: any): RestaurantMenuType => {
	return {
		name: res.name,
		id: res.id,
		thumbnailImage: res.thumbnailImage || null,
		fullPrice: res.fullPrice,
		discountedPercent: res.discountedPercent,
		discountedTimePeriod: {
			begin: res.discountedTimePeriod?.begin || null,
			end: res.discountedTimePeriod?.end || null,
		},
		sold: res.sold,
		totalInStock: res.totalInStock,
		largeImage: res.largeImage || null,
		options: res.options.map(transformRestaurantOption),
	};
};
