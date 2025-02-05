import { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { fetchRestaurant, fetchRestaurantMenu, fetchRestaurantTopDishes } from '../services/restaurants';

type RestaurantParams = {
	id: string;
};

type RestaurantMenuParams = {
	id: string;
	menuName: string;
};

// TODO: use Promise.all to get short menu preventing overhead and handle it with pagination
export const getRestaurant = async (req: Request<RestaurantParams>, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const response: AxiosResponse = await fetchRestaurant(id);
		return res.status(httpStatus.OK).json(response.data);
	} catch (error) {
		next(error);
	}
};

export const getRestaurantShortMenu = async (req: Request<RestaurantMenuParams>, res: Response, next: NextFunction) => {
	try {
		const { id, menuName } = req.params;
		const response: AxiosResponse = await fetchRestaurantMenu(id, menuName, 'short');
		return res.status(httpStatus.OK).json(response.data);
	} catch (error) {
		next(error);
	}
};

export const getRestaurantFullMenu = async (req: Request<RestaurantMenuParams>, res: Response, next: NextFunction) => {
	try {
		const { id, menuName } = req.params;
		const response: AxiosResponse = await fetchRestaurantMenu(id, menuName, 'full');
		return res.status(httpStatus.OK).json(response.data);
	} catch (error) {
		next(error);
	}
};

export const getRestaurantTopDishes = async (req: Request<RestaurantMenuParams>, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const response = await fetchRestaurantTopDishes(id);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		next(error);
	}
};
