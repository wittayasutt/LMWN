import { useGetRestaurantMenuFull, useGetRestaurantTopDishes } from '@/services';
import { ModalBackdrop, Spinner } from '@/components';

import RestaurantModalContent from './RestaurantModalContent';

export type RestaurantModalProps = {
	menuName: string;
	restaurantId: string;
	onClose: () => void;
};

const RestaurantModal = ({ menuName, restaurantId, onClose }: RestaurantModalProps) => {
	const { data, isFetching } = useGetRestaurantMenuFull(restaurantId, menuName);
	const { data: topDishes } = useGetRestaurantTopDishes(restaurantId);

	const isTopDish = topDishes?.some((topDish) => topDish === menuName);

	if (isFetching) {
		return (
			<ModalBackdrop onClose={onClose}>
				<Spinner />
			</ModalBackdrop>
		);
	}

	return (
		<ModalBackdrop onClose={onClose}>
			<RestaurantModalContent menu={data} isFetching={isFetching} isTopDish={isTopDish} onClose={onClose} />;
		</ModalBackdrop>
	);
};

export default RestaurantModal;
