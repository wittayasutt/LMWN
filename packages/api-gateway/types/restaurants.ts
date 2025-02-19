export type ActiveTimePeriodType = {
	close: string;
	open: string;
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
	activeTimePeriod: ActiveTimePeriodType;
	coverImage: string;
	id: number;
	menus: string[];
	name: string;
};

export type RestaurantResponseType = {
	activeTimePeriod: ActiveTimePeriodType;
	coverImage: string;
	id: number;
	name: string;
};

export type RestaurantMenuType = {
	name: string;
	id: string;
	thumbnailImage: string | null;
	fullPrice: number;
	discountedPercent?: number;
	discountedTimePeriod?: DiscountedTimePeriodType;
	sold: number;
	totalInStock: number;
};

export type RestaurantMenuFullType = RestaurantMenuType & {
	largeImage: string | null;
	options: RestaurantOptionType[];
};
