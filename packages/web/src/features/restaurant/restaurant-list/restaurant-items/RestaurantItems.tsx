import { uniq } from 'lodash';
import { useMemo } from 'react';
import { RestaurantType } from '@/types';

import RestaurantItem from './RestaurantItem';

type RestaurantItemProps = {
	data?: RestaurantType;
	isFetching: boolean;
	onSelectMenu: (menuName: string) => void;
};

const RestaurantItems = ({ data, isFetching, onSelectMenu }: RestaurantItemProps) => {
	const menus: string[] = useMemo(() => {
		return data?.menus ? uniq(data.menus) : [];
	}, [data]);

	if (isFetching) {
		return Array.from({ length: 5 }, (_, i) => <RestaurantItem key={i} isFetching={isFetching} />);
	}

	return (
		<div>
			{data?.id &&
				menus?.map((menu) => (
					<RestaurantItem
						key={menu}
						restaurantId={data.id.toString()}
						menuName={menu}
						onSelect={onSelectMenu}
					/>
				))}
		</div>
	);
};

export default RestaurantItems;
