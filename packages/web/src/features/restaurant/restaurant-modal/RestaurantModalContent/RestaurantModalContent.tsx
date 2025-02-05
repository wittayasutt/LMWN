import { CoverImage, ModalContent } from '@/components';
import { RestaurantMenuFullType } from '@/types';

import RestaurantModalContentOptions from './RestaurantModalContentOptions';
import RestaurantModalContentTitle from './RestaurantModalContentTitle';

type RestaurantModalContentProps = {
	isFetching: boolean;
	isTopDish?: boolean;
	menu?: RestaurantMenuFullType;
	onClose: () => void;
};

const RestaurantModalContent = ({ isFetching, isTopDish, menu, onClose }: RestaurantModalContentProps) => {
	return (
		<ModalContent title={menu?.name} onClose={onClose}>
			<CoverImage className='h-40 md:h-80' src={menu?.largeImage} alt={menu?.name} isFetching={isFetching} />
			<div className='py-2 px-4'>
				<RestaurantModalContentTitle isTopDish={isTopDish} menu={menu} />
				<RestaurantModalContentOptions options={menu?.options} />
			</div>
		</ModalContent>
	);
};

export default RestaurantModalContent;
