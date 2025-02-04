import clsx from 'clsx';
import { useGetRestaurantMenu } from '@/services';

import CoverImage from './CoverImage';
import Detail from './Detail';

type RestaurantItemProps = {
	menuName: string;
	restaurantId: string;
	isFetching?: boolean;
	onSelect: (menuName: string) => void;
};

const RestaurantItem = ({
	menuName,
	restaurantId,
	isFetching: isFetchingRestaurant,
	onSelect,
}: RestaurantItemProps) => {
	const { data, isFetching: isFetchingMenu } = useGetRestaurantMenu(restaurantId, menuName);

	const isFetching = isFetchingRestaurant || isFetchingMenu;

	return (
		<div
			className={clsx(
				'flex p-2 mb-4 rounded-2xl cursor-pointer',
				isFetching ? 'bg-gray-100 dark:bg-gray-200 animate-pulse' : 'bg-inherit',
			)}
			onClick={() => onSelect(menuName)}
		>
			<CoverImage src={data?.thumbnailImage} alt={data?.name} isFetching={isFetching} />
			<Detail menu={data} isFetching={isFetching} />
		</div>
	);
};

export default RestaurantItem;
