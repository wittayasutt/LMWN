import { RestaurantMenuType } from '@/types';

import { Price } from '../../components';

type DetailPriceProps = {
	menu?: RestaurantMenuType;
};

const DetailPrice = ({ menu }: DetailPriceProps) => {
	return (
		<p className='text-lg md:text-xl'>
			<Price menu={menu} />
		</p>
	);
};

export default DetailPrice;
