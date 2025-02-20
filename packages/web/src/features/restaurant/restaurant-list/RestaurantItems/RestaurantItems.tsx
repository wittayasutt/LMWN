import { uniqBy } from 'lodash';
import { useMemo } from 'react';
import { RestaurantMenuType } from '@/types';

import RestaurantItem from './RestaurantItem';

type RestaurantItemProps = {
	data: RestaurantMenuType[];
	restaurantId?: string;
	onSelectMenu: (menuName: string) => void;
};

const RestaurantItems = ({ data,  restaurantId, onSelectMenu }: RestaurantItemProps) => {
	const menus: RestaurantMenuType[] = useMemo(() => {
		return data ? uniqBy(data, 'id') : [];
	}, [data]);

	return (
		<div>
			{menus?.map((menu) => (
				<RestaurantItem key={menu.id} menu={menu} restaurantId={restaurantId} onSelect={onSelectMenu} />
			))}
		</div>
	);
};

export default RestaurantItems;
