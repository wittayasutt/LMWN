import { Request, Response, NextFunction } from 'express';
import { AxiosResponse } from 'axios';

import $axios from '.';

export const getRestaurant = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId } = req.params;

		const response: AxiosResponse = await $axios.get(`/restaurants/${restaurantId}.json`);

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

export const getRestaurantFullMenu = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId, menuName } = req.params;
		const url = `/restaurants/${restaurantId}/menus/${menuName}/full.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error) {
		next(error);
	}
};
