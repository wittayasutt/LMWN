import { useCallback, useEffect, useState } from 'react';

import { getIsBetweenByTime } from '@/helpers/date';
import { serviceGetRestaurant, serviceGetRestaurantShortMenu, serviceGetRestaurantFullMenu } from '@/services';
import { ActiveTimePeriodType, RestaurantType, RestaurantMenuType } from '@/types/restaurants';

const RESTAURANT_ID = 567051;

export default () => {
	const [menuLength, setMenuLength] = useState(0);
	const [fetchedMenuId, setFetchedMenuId] = useState<string[]>([]);

	const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(false);
	const [restaurant, setRestaurant] = useState<RestaurantType | null>();

	const [isLoadingRestaurantShortMenu, setIsLoadingRestaurantShortMenu] = useState(false);
	const [restaurantShortMenu, setRestaurantShortMenu] = useState<RestaurantMenuType | null>(null);

	const [isLoadingRestaurantFullMenu, setIsLoadingRestaurantFullMenu] = useState(false);
	const [restaurantFullMenu, setRestaurantFullMenu] = useState<RestaurantMenuType | null>(null);

	// topDishesTemp for calculate actual topDishes
	const [topDishesTemp, setTopDishesTemp] = useState<string[]>([]);
	const [topDishes, setTopDishes] = useState<string[]>([]);
	const [topSold, setTopSold] = useState(0);

	const fetchRestaurant = useCallback(async () => {
		setIsLoadingRestaurant(true);

		try {
			const res = await serviceGetRestaurant(RESTAURANT_ID);
			setRestaurant(res);
			setMenuLength(res.menus.length);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoadingRestaurant(false);
		}
	}, []);

	const fetchRestaurantShortMenu = useCallback(async (id: number, menu: string) => {
		setIsLoadingRestaurantShortMenu(true);

		try {
			const res = await serviceGetRestaurantShortMenu(id, menu);
			setRestaurantShortMenu(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoadingRestaurantShortMenu(false);
		}
	}, []);

	const fetchRestaurantFullMenu = useCallback(async (id: number, menu: RestaurantMenuType) => {
		setIsLoadingRestaurantFullMenu(true);
		setRestaurantFullMenu(menu);

		try {
			const res = await serviceGetRestaurantFullMenu(id, menu.name);
			setRestaurantFullMenu(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoadingRestaurantFullMenu(false);
		}
	}, []);

	const getIsRestaurantOpen = (activeTimePeriod: ActiveTimePeriodType): boolean => {
		if (activeTimePeriod) {
			return getIsBetweenByTime(activeTimePeriod.open, activeTimePeriod.close);
		}

		return false;
	};

	const addTopDish = useCallback(
		(dish: RestaurantMenuType) => {
			const dishId = dish.id;

			if (dish.sold > topSold) {
				setTopSold(dish.sold);
				setTopDishesTemp([dishId]);
			} else if (dish.sold === topSold) {
				setTopDishesTemp((prev) => {
					return [...prev, dishId];
				});
			}

			setFetchedMenuId((prev) => {
				return [...prev, dishId];
			});
		},
		[topSold],
	);

	useEffect(() => {
		if (menuLength && menuLength === fetchedMenuId.length) {
			return setTopDishes(topDishesTemp);
		}
	}, [fetchedMenuId]);

	return {
		setMenuLength,

		// restaurant
		restaurant,
		fetchRestaurant,
		isLoadingRestaurant,

		// restaurantShortMenu
		restaurantShortMenu,
		fetchRestaurantShortMenu,
		isLoadingRestaurantShortMenu,

		// restaurantFullMenu
		restaurantFullMenu,
		setRestaurantFullMenu,
		fetchRestaurantFullMenu,
		isLoadingRestaurantFullMenu,

		getIsRestaurantOpen,
		addTopDish,
		topDishes,
	};
};
