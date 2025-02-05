import { useGetRestaurantMenuFull } from '@/services';
import { ModalBackdrop, Spinner } from '@/components';

import RestaurantModalContent from './RestaurantModalContent';

type RestaurantModalProps = {
	menuName: string;
	restaurantId: string;
	onClose: () => void;
};

const RestaurantModal = ({ menuName, restaurantId, onClose }: RestaurantModalProps) => {
	const { data, isFetching } = useGetRestaurantMenuFull(restaurantId, menuName);

	if (isFetching) {
		return (
			<ModalBackdrop onClose={onClose}>
				<Spinner />
			</ModalBackdrop>
		);
	}

	return (
		<ModalBackdrop onClose={onClose}>
			<RestaurantModalContent menu={data} isFetching={isFetching} onClose={onClose} />;
		</ModalBackdrop>
	);
};

export default RestaurantModal;
