import { RestaurantMenuFullType } from '@/types';
import { th } from '@/lang';

import { Price } from '../../components';

type RestaurantModalContentTitleProps = {
	isTopDish?: boolean;
	menu?: RestaurantMenuFullType;
};

const RestaurantModalContentTitle = ({ menu, isTopDish }: RestaurantModalContentTitleProps) => {
	return (
		<div className='flex justify-between items-center'>
			<h4 className='text-lg md:text-xl'>
				{th.price} <Price menu={menu} />
			</h4>
			{isTopDish && <h4 className='text-lg md:text-xl'>{th.recommend}</h4>}
		</div>
	);
};

export default RestaurantModalContentTitle;
