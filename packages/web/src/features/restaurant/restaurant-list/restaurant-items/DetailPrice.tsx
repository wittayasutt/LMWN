import { useEffect, useState } from 'react';
import { getDiscountPrice, getIsBetweenByTime } from '@/helpers';
import { RestaurantMenuType } from '@/types';
import { th } from '@/lang';

type DetailPriceProps = {
	menu?: RestaurantMenuType;
};

const DetailPrice = ({ menu }: DetailPriceProps) => {
	const [discountPrice, setDiscountPrice] = useState<number>(0);

	useEffect(() => {
		// TODO: Check discount logic
		if (!menu?.discountedTimePeriod?.begin || !menu?.discountedTimePeriod?.end) {
			return;
		}

		const isBetween = getIsBetweenByTime(menu?.discountedTimePeriod.begin, menu?.discountedTimePeriod.end);

		if (isBetween && menu?.discountedPercent) {
			const thisDiscountPrice = getDiscountPrice(menu.fullPrice, menu.discountedPercent);
			setDiscountPrice(thisDiscountPrice);
		}
	}, [menu]);

	if (!menu) {
		return <p className='text-base md:text-xl'>- {th.baht}</p>;
	} else if (discountPrice) {
		return (
			<p className='text-base md:text-xl'>
				<span className='mr-2 line-through'>
					{menu?.fullPrice} {th.baht}
				</span>
				<span>
					{discountPrice} {th.baht}
				</span>
			</p>
		);
	}

	return (
		<p className='text-base md:text-xl'>
			{menu?.fullPrice} {th.baht}
		</p>
	);
};

export default DetailPrice;
