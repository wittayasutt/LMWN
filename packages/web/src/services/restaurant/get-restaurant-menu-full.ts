import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { axios } from '@/utils';
import { RestaurantMenuFullType } from '@/types';

const getRestaurantMenuFull = async (restaurantId: string, menuName: string) => {
	const { data } = await axios.get<RestaurantMenuFullType>(`/restaurants/${restaurantId}/menus/${menuName}/full`);
	return data;
};

export const useGetRestaurantMenuFull = (
	restaurantId: string,
	menuName: string,
): UseQueryResult<RestaurantMenuFullType> => {
	return useQuery({
		enabled: !!restaurantId && !!menuName,
		queryFn: () => getRestaurantMenuFull(restaurantId, menuName),
		queryKey: ['restaurant-full', restaurantId, menuName],
	});
};
