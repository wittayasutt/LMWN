import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { axios } from '@/utils';
import { RestaurantType } from '@/types';

const getRestaurant = async (id: string) => {
	const { data } = await axios.get<RestaurantType>(`/restaurants/${id}`);
	return data;
};

export const useGetRestaurant = (id: string): UseQueryResult<RestaurantType> => {
	return useQuery({
		queryFn: () => getRestaurant(id),
		queryKey: ['restaurant', id],
	});
};
