import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';

import $axios from '.';

export const getRestaurant = async (req: Request, res: Response) => {
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
