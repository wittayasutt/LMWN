export type ActiveTimePeriodType = {
	close: string;
	open: string;
};

export type RestaurantType = {
	activeTimePeriod: ActiveTimePeriodType;
	coverImage: string;
	id: number;
	menus: string[];
	name: string;
};
