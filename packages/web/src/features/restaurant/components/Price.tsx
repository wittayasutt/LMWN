import { useEffect, useState } from 'react';
import { getDiscountPriceByMenu } from '@/helpers';
import { RestaurantMenuType } from '@/types';
import { th } from '@/lang';

type PriceProps = {
	menu?: RestaurantMenuType;
};

const Price = ({ menu }: PriceProps) => {
	const [discountPrice, setDiscountPrice] = useState<number | null>(null);

	useEffect(() => {
		if (!menu) {
			return;
		}

		const menuDiscountPrice = getDiscountPriceByMenu(menu);
		setDiscountPrice(menuDiscountPrice);
	}, [menu]);

	if (!menu) {
		return <span>- {th.baht}</span>;
	} else if (discountPrice) {
		return (
			<>
				<span className='mr-2 line-through'>
					{menu?.fullPrice} {th.baht}
				</span>
				<span>
					{discountPrice} {th.baht}
				</span>
			</>
		);
	}

	return (
		<span>
			{menu?.fullPrice} {th.baht}
		</span>
	);
};

export default Price;
