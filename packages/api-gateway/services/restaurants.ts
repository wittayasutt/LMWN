import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';

import $axios from '.';

// TODO: move to types
type RestaurantParams = {
	id: string;
};

type RestaurantMenuParams = {
	id: string;
	menuName: string;
};

export const getRestaurant = async (req: Request<RestaurantParams>, res: Response) => {
	try {
		const { id: restaurantId } = req.params;

		const response: AxiosResponse = await $axios.get(`/restaurants/${restaurantId}.json`);

		return res.status(response.status).json(response.data);
	} catch (error: any) {
		// TODO: add to middleware
		const statusCode = error.response.status || 500;
		return res.status(statusCode).json(error);
	}
};

export const getRestaurantShortMenu = async (req: Request, res: Response) => {
	try {
		const { id: restaurantId, menuName } = req.params;
		const url = `/restaurants/${restaurantId}/menus/${menuName}/short.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error: any) {
		// TODO: add to middleware
		const statusCode = error.response.status || 500;
		return res.status(statusCode).json(error);
	}
};

export const getRestaurantFullMenu = async (req: Request<RestaurantMenuParams>, res: Response) => {
	try {
		const { id: restaurantId, menuName } = req.params;
		const url = `/restaurants/${restaurantId}/menus/${menuName}/full.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error: any) {
		// TODO: add to middleware
		const statusCode = error.response.status || 500;
		return res.status(statusCode).json(error);
	}
};
