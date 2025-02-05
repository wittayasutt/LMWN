import { AxiosResponse } from 'axios';

import { axios, getTopDishes } from '../utils';

export const fetchRestaurant = async (id: string): Promise<AxiosResponse> => {
	return await axios.get(`/restaurants/${id}.json`);
};

export const fetchRestaurantMenu = async (
	id: string,
	menuName: string,
	type: 'full' | 'short',
): Promise<AxiosResponse> => {
	return await axios.get(`/restaurants/${id}/menus/${menuName}/${type}.json`);
};

export const fetchRestaurantTopDishes = async (id: string): Promise<any> => {
	const response = await axios.get(`/restaurants/${id}.json`);
	const responseAllMenus = await Promise.all(
		response.data.menus.map((menu: string) => axios.get(`/restaurants/${id}/menus/${menu}/short.json`)),
	);

	return getTopDishes(responseAllMenus.map((res) => res.data));
};
