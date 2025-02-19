import { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { fetchRestaurant, fetchRestaurantMenu, fetchRestaurantTopDishes } from '../services/restaurants';
import { sanitizeGetRestaurant } from '../middlewares';
import { filterItems } from '../utils';
import { RestaurantType } from '../types';

type RestaurantParams = {
	id: string;
};

type RestaurantMenuListParams = {
	id: string;
	page: number;
	itemPerPage: number;
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

		const sanitizedRestaurant = sanitizeGetRestaurant(response.data);
		return res.status(httpStatus.OK).json(sanitizedRestaurant);
	} catch (error) {
		next(error);
	}
};

export const getRestaurantMenuList = async (
	req: Request<RestaurantMenuListParams>,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { id } = req.params;

		const page = parseInt((req.query.page as string) || '1', 10);
		const itemPerPage = parseInt((req.query.itemPerPage as string) || '16', 10);

		const restaurantsResponse: AxiosResponse = await fetchRestaurant(id);

		const menus = filterItems<string>(restaurantsResponse.data.menus, page, itemPerPage);
		const fullMenus = await Promise.all(
			menus.map((menu) => fetchRestaurantMenu(id, menu, 'short').then((res) => res.data)),
		);

		const response = {
			itemPerPage,
			menus: fullMenus,
			page,
			total: restaurantsResponse.data.menus.length,
			totalPage: restaurantsResponse.data.menus.length / itemPerPage,
		};

		return res.status(httpStatus.OK).json(response);
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
