import { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';

import $axios from '.';

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
