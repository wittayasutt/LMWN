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

export const getRestaurantMenu = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id: restaurantId, menuName, isFull } = req.params;
		const url = `/restaurants/${restaurantId}/menus/${menuName}/${isFull ? 'full' : 'short'}.json`;

		const response: AxiosResponse = await $axios.get(url);

		return res.status(response.status).json(response.data);
	} catch (error) {
		next(error);
	}
};
