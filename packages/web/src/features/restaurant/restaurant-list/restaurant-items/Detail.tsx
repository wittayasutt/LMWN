import { TypographyDetailSkeleton } from '@/components';
import { RestaurantMenuType } from '@/types';

import DetailPrice from './DetailPrice';

type DetailProps = {
	menu?: RestaurantMenuType;
	isFetching: boolean;
};

const Detail = (props: DetailProps) => {
	const { menu, isFetching } = props;

	if (isFetching) {
		return (
			<div className='w-full py-2 pl-4'>
				<TypographyDetailSkeleton />
			</div>
		);
	}

	return (
		<div className='py-1 pl-4'>
			<h4 className='mb-1 md:mb-2 text-base md:text-xl'>{menu?.name}</h4>
			<DetailPrice menu={menu} />
		</div>
	);
};

export default Detail;
