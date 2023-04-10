import { useEffect, useState } from 'react';
import styled from 'styled-components';

import text from '@/const/text';
import { getIsBetweenByTime } from '@/helpers/date';
import { getDiscountPrice } from '@/helpers/price';
import { RestaurantMenuType } from '@/types/restaurants';

type MenuProps = {
	menu: RestaurantMenuType | null;
};

const FullPrice = styled.span`
	text-decoration: line-through;
	margin-right: 0.5rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 1.25rem;
	}
`;

const Price = styled.span`
	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 1.25rem;
	}
`;

const PriceComponent = ({ menu }: MenuProps) => {
	const [discountPrice, setDiscountPrice] = useState(0);

	useEffect(() => {
		if (menu?.discountedTimePeriod.begin && menu?.discountedTimePeriod.end) {
			const isBetween = getIsBetweenByTime(menu?.discountedTimePeriod.begin, menu?.discountedTimePeriod.end);

			if (isBetween && menu?.discountedPercent) {
				const thisDiscountPrice = getDiscountPrice(menu.fullPrice, menu.discountedPercent);
				setDiscountPrice(thisDiscountPrice);
			}
		}
	}, [menu]);

	if (!menu) {
		return <Price>- {text.baht}</Price>;
	} else if (discountPrice) {
		return (
			<>
				<FullPrice>
					{menu?.fullPrice} {text.baht}
				</FullPrice>
				<Price>
					{discountPrice} {text.baht}
				</Price>
			</>
		);
	}

	return (
		<Price>
			{menu?.fullPrice} {text.baht}
		</Price>
	);
};

export default PriceComponent;
