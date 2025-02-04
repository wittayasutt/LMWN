import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { axios } from '@/utils';
import { RestaurantMenuType } from '@/types';

const getRestaurantMenu = async (restaurantId: string, menuName: string) => {
	const { data } = await axios.get<RestaurantMenuType>(`/restaurants/${restaurantId}/menus/${menuName}/short`);
	return data;
};

export const useGetRestaurantMenu = (restaurantId: string, menuName: string): UseQueryResult<RestaurantMenuType> => {
	return useQuery({
		queryFn: () => getRestaurantMenu(restaurantId, menuName),
		queryKey: ['restaurant-short', restaurantId, menuName],
	});
};
