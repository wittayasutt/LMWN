import { TypographyDetailSkeleton } from '@/components';
import { RestaurantMenuType } from '@/types';

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
		<div className='py-2 pl-4'>
			<h4 className='text-xl'>{menu?.name}</h4>
		</div>
	);
};

export default Detail;
