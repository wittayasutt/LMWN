import { uniq } from 'lodash';
import { useMemo } from 'react';
import { RestaurantType } from '@/types';

import { RestaurantItem } from './';
import RestaurantTitle from './RestaurantTitle';

type RestaurantListProps = {
	data?: RestaurantType;
	isFetching: boolean;
	onSelectMenu: (menuName: string) => void;
};

const RestaurantList = (props: RestaurantListProps) => {
	const { data, onSelectMenu } = props;

	const menus: string[] = useMemo(() => {
		return data?.menus ? uniq(data.menus) : [];
	}, [data]);

	return (
		<div className='pt-8'>
			<RestaurantTitle {...props} />
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
		</div>
	);
};

export default RestaurantList;
