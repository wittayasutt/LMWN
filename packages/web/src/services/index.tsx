import axios, { AxiosResponse } from 'axios';
import {
	transformRestaurant,
	transformRestaurantShortMenu,
	transformRestaurantFullMenu,
} from '@/transforms/restaurants';

const $axios = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const serviceGetRestaurant = (id: number) => {
	return $axios
		.get(`/restaurants/${id}`)
		.then((response: AxiosResponse) => {
			return transformRestaurant(response.data);
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};

export const serviceGetRestaurantShortMenu = (id: string, menuName: string) => {
	return $axios
		.get(`/restaurants/${id}/menus/${menuName}/short`)
		.then((response: AxiosResponse) => {
			return transformRestaurantShortMenu(response.data);
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};

export const serviceGetRestaurantFullMenu = (id: string, menuName: string) => {
	return $axios
		.get(`/restaurants/${id}/menus/${menuName}/full`)
		.then((response: AxiosResponse) => {
			return transformRestaurantFullMenu(response.data);
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};
