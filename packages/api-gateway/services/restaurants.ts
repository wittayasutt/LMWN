import { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import $axios from '.';
import { getTopDishes } from '../utils';

type RestaurantParams = {
	id: string;
};

type RestaurantMenuParams = {
	id: string;
	menuName: string;
};

export const getRestaurant = async (req: Request<RestaurantParams>, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId } = req.params;
		const url = `/restaurants/${restaurantId}.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error) {
		next(error);
	}
};

export const getRestaurantShortMenu = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId, menuName } = req.params;
		const url = `/restaurants/${restaurantId}/menus/${menuName}/short.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error) {
		next(error);
	}
};

export const getRestaurantFullMenu = async (req: Request<RestaurantMenuParams>, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId, menuName } = req.params;
		const url = `/restaurants/${restaurantId}/menus/${menuName}/full.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error) {
		next(error);
	}
};

// TODO: Refactor this code
export const getRestaurantTopDishes = async (req: Request<RestaurantMenuParams>, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId } = req.params;
		const url = `/restaurants/${restaurantId}.json`;

		const response: AxiosResponse = await $axios.get(url);
		const responseAllMenus = await Promise.all(
			response.data.menus.map((menu: string) =>
				$axios.get(`/restaurants/${restaurantId}/menus/${menu}/short.json`),
			),
		);

		const topDishes = getTopDishes(responseAllMenus.map((res) => res.data));
		return res.status(httpStatus.OK).json(topDishes);
	} catch (error) {
		next(error);
	}
};
