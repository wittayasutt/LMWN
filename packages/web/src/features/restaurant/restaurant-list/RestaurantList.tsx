import { RestaurantType } from '@/types';
import RestaurantTitle from './RestaurantTitle';

type RestaurantListProps = {
	data?: RestaurantType;
	isFetching: boolean;
};

const RestaurantList = (props: RestaurantListProps) => {
	return (
		<div className='pt-8'>
			<RestaurantTitle {...props} />
		</div>
	);
};

export default RestaurantList;
