import { useCallback, useEffect, useState } from 'react';
import { getDiscountPriceByMenu } from '@/helpers';
import { RestaurantMenuType } from '@/types';
import { th } from '@/lang';

type PriceProps = {
	menu?: RestaurantMenuType;
};

const Price = ({ menu }: PriceProps) => {
	const [discountPrice, setDiscountPrice] = useState<number | null>(null);

	// TODO: remove this function, make it for show since the actual data doesn't have a discount price
	const mockDiscountPrice = useCallback(
		(menuItem: RestaurantMenuType): number | null => {
			const mockMenu = {
				...menuItem,
				discountedPercent: 25,
				discountedTimePeriod: {
					begin: '10:30',
					end: '20:00"',
				},
			};

			return menu?.id === 'โรตี แกงเขียวหวานหมู  ไก่'
				? getDiscountPriceByMenu(mockMenu)
				: getDiscountPriceByMenu(menuItem);
		},
		[menu],
	);

	useEffect(() => {
		if (!menu) {
			return;
		}

		const menuDiscountPrice = mockDiscountPrice(menu);
		setDiscountPrice(menuDiscountPrice);
	}, [menu, mockDiscountPrice]);

	if (!menu) {
		return <span>- {th.baht}</span>;
	} else if (discountPrice) {
		return (
			<>
				<span className='mr-2 line-through'>
					{menu?.fullPrice} {th.baht}
				</span>
				<span className='text-red-400'>
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
