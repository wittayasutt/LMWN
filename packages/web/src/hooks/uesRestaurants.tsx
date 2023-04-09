import { useCallback, useState } from 'react';

import { getIsBetweenByTime } from '@/helpers/date';
import { serviceGetRestaurant } from '@/services';
import { ActiveTimePeriodType, RestaurantType } from '@/types/restaurants';

const RESTAURANT_ID = 567051;

export default () => {
	const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(false);
	const [restaurant, setRestaurant] = useState<RestaurantType | null>();

	const fetchRestaurant = useCallback(async () => {
		setIsLoadingRestaurant(true);

		try {
			const res = await serviceGetRestaurant(RESTAURANT_ID);
			setRestaurant(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoadingRestaurant(false);
		}
	}, []);

	const getIsRestaurantOpen = (activeTimePeriod: ActiveTimePeriodType): boolean => {
		if (activeTimePeriod) {
			return getIsBetweenByTime(activeTimePeriod.open, activeTimePeriod.close);
		}

		return false;
	};

	return { restaurant, fetchRestaurant, isLoadingRestaurant, getIsRestaurantOpen };
};
