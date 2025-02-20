import clsx from 'clsx';
import { useGetRestaurantTopDishes } from '@/services';
import { RestaurantMenuType } from '@/types';

import CoverImage from './CoverImage';
import Detail from './Detail';

export type RestaurantItemProps = {
	menu?: RestaurantMenuType;
	restaurantId?: string;
	isFetching?: boolean;
	onSelect?: (menuName: string) => void;
};

const RestaurantItem = ({ menu, isFetching = false, restaurantId, onSelect }: RestaurantItemProps) => {
	const { data: topDishes } = useGetRestaurantTopDishes(restaurantId);
	const isTopDish = topDishes?.some((topDish) => topDish === menu?.name);

	// TODO: Handle totalInStock = 0
	return (
		<div
			className={clsx(
				'flex p-2 mb-2 md:mb-4 rounded-2xl cursor-pointer',
				isFetching ? 'bg-gray-100 dark:bg-gray-200 animate-pulse' : 'bg-inherit',
			)}
			onClick={() => !isFetching && menu && onSelect?.(menu.name)}
		>
			<CoverImage src={menu?.thumbnailImage} alt={menu?.name} isFetching={isFetching} isTopDish={isTopDish} />
			<Detail menu={menu} isFetching={isFetching} />
		</div>
	);
};

export default RestaurantItem;
