import { RestaurantType } from '@/types';
import { useGetRestaurantMenus } from '@/services';

import RestaurantItems, { RestaurantItem } from './RestaurantItems';
import RestaurantTitle from './RestaurantTitle';

type RestaurantListProps = {
	data?: RestaurantType;
	isFetching: boolean;
	onSelectMenu: (menuName: string) => void;
};

const RestaurantList = ({ data, isFetching: isFetchingRestaurant, onSelectMenu }: RestaurantListProps) => {
	const {
		data: dataMenu,
		fetchNextPage,
		hasNextPage,
		isFetching: isFetchingMenu,
		isFetchingNextPage,
	} = useGetRestaurantMenus(data?.id.toString());

	if (hasNextPage && !isFetchingNextPage) {
		fetchNextPage();
	}

	const isFetching = isFetchingRestaurant || isFetchingMenu || isFetchingNextPage;

	return (
		<div className='pt-8'>
			<RestaurantTitle data={data} isFetching={isFetching} />
			<RestaurantItems data={dataMenu || []} restaurantId={data?.id.toString()} onSelectMenu={onSelectMenu} />
			{isFetching && Array.from({ length: 5 }, (_, i) => <RestaurantItem key={i} isFetching={isFetching} />)}
		</div>
	);
};

export default RestaurantList;
