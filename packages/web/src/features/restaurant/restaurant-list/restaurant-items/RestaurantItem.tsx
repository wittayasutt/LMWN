import clsx from 'clsx';
import { useGetRestaurantMenu, useGetRestaurantTopDishes } from '@/services';

import CoverImage from './CoverImage';
import Detail from './Detail';

type RestaurantItemProps = {
	menuName?: string;
	restaurantId?: string;
	isFetching?: boolean;
	onSelect?: (menuName: string) => void;
};

const RestaurantItem = ({
	menuName,
	restaurantId,
	isFetching: isFetchingRestaurant,
	onSelect,
}: RestaurantItemProps) => {
	const { data, isFetching: isFetchingMenu } = useGetRestaurantMenu(restaurantId, menuName);
	const { data: topDishes } = useGetRestaurantTopDishes(restaurantId);

	const isFetching = isFetchingRestaurant || isFetchingMenu;
	const isTopDish = topDishes?.some((topDish) => topDish === menuName);

	// TODO: Handle totalInStock = 0
	return (
		<div
			className={clsx(
				'flex p-2 mb-2 md:mb-4 rounded-2xl cursor-pointer',
				isFetching ? 'bg-gray-100 dark:bg-gray-200 animate-pulse' : 'bg-inherit',
			)}
			onClick={() => !isFetching && menuName && onSelect?.(menuName)}
		>
			<CoverImage src={data?.thumbnailImage} alt={data?.name} isFetching={isFetching} isTopDish={isTopDish} />
			<Detail menu={data} isFetching={isFetching} />
		</div>
	);
};

export default RestaurantItem;
