import { RestaurantMenuType } from '../types';

export const getTopDishes = (menus: RestaurantMenuType[]) => {
	const topSold = menus.reduce((acc, cur) => (acc < cur.sold ? cur.sold : acc), 0);
	return menus.filter((menu) => menu.sold === topSold).map((menu) => menu.name);
};
