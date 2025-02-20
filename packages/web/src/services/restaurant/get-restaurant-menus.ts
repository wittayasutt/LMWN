import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { axios } from '@/utils';
import { RestaurantMenus, RestaurantMenuType } from '@/types';

const getRestaurantMenus = async (restaurantId: string, page: number = 1, itemPerPage: number = 16) => {
	const { data } = await axios.get<RestaurantMenus>(`/restaurants/${restaurantId}/menus`, {
		params: {
			page,
			itemPerPage,
		},
	});

	return data;
};

export const useGetRestaurantMenus = (restaurantId?: string): UseInfiniteQueryResult<RestaurantMenuType[]> => {
	return useInfiniteQuery({
		enabled: !!restaurantId,
		queryFn: ({ pageParam }) => getRestaurantMenus(restaurantId!, pageParam),
		queryKey: ['restaurant-menu', restaurantId],
		getNextPageParam: (lastPage) => {
			if (lastPage.page === lastPage.totalPage) {
				return null;
			}

			return lastPage.page + 1;
		},
		initialPageParam: 1,
		select: (data) => {
			return data.pages.map((page) => page.menus).flat();
		},
	});
};
