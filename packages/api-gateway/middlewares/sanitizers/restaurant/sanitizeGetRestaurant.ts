import { RestaurantType, RestaurantResponseType } from '../../../types';

export const sanitizeGetRestaurant = (res: RestaurantType): RestaurantResponseType => {
	return {
		activeTimePeriod: res?.activeTimePeriod,
		coverImage: res?.coverImage,
		id: res?.id,
		name: res?.name,
	};
};
