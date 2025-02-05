import { CoverImage, ModalContent } from '@/components';
import { RestaurantMenuFullType } from '@/types';

type RestaurantModalContentProps = {
	menu?: RestaurantMenuFullType;
	onClose: () => void;
};

const RestaurantModalContent = ({ menu, onClose }: RestaurantModalContentProps) => {
	return (
		<ModalContent title={menu?.name} onClose={onClose}>
			<CoverImage className='h-40 md:h-80' src={menu?.largeImage} alt={menu?.name} />
			{menu?.name}
		</ModalContent>
	);
};

export default RestaurantModalContent;
