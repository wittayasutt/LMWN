import { RestaurantType } from '@/types';

import { RestaurantItems } from './';
import RestaurantTitle from './RestaurantTitle';

type RestaurantListProps = {
	data?: RestaurantType;
	isFetching: boolean;
	onSelectMenu: (menuName: string) => void;
};

const RestaurantList = (props: RestaurantListProps) => {
	return (
		<div className='pt-8'>
			<RestaurantTitle {...props} />
			<RestaurantItems {...props} />
		</div>
	);
};

export default RestaurantList;
