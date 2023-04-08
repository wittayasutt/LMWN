export type ActiveTimePeriodType = {
	open: string;
	close: string;
};

export type DiscountedTimePeriodType = {
	begin: string | null;
	end: string | null;
};

export type RestaurantChoicesType = {
	label: string;
};

export type RestaurantOptionType = {
	label: string;
	choices: RestaurantChoicesType[];
};

export type RestaurantType = {
	name: string;
	id: number;
	coverImage: string;
	menus: string[];
	activeTimePeriod: ActiveTimePeriodType;
};

export type RestaurantShortMenuType = {
	name: string;
	id: string;
	thumbnailImage: string | null;
	fullPrice: number;
	discountedPercent: number;
	discountedTimePeriod: DiscountedTimePeriodType;
	sold: number;
	totalInStock: number;
};

export type RestaurantFullMenuType = RestaurantShortMenuType & {
	largeImage: string | null;
	options: RestaurantOptionType[];
};
