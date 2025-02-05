import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { axios } from '@/utils';
import { RestaurantTopDishes } from '@/types';

const getRestaurantTopDishes = async (restaurantId: string) => {
	const { data } = await axios.get<RestaurantTopDishes>(`/restaurants/${restaurantId}/topDishes`);
	return data;
};

export const useGetRestaurantTopDishes = (id?: string): UseQueryResult<RestaurantTopDishes> => {
	return useQuery({
		enabled: !!id,
		queryFn: () => getRestaurantTopDishes(id!),
		queryKey: ['restaurant-top-dishes', id],
	});
};
