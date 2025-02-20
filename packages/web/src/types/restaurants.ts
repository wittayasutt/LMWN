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

export type RestaurantMenuMeta = {
	itemPerPage: number;
	page: number;
	total: number;
	totalPage: number;
};

export type RestaurantMenus = RestaurantMenuMeta & {
	menus: RestaurantMenuType[];
};

export type RestaurantMenuFullType = RestaurantMenuType & {
	largeImage: string | null;
	options: RestaurantOptionType[];
};

export type RestaurantTopDishes = string[];
