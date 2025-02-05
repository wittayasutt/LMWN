import { CoverImage, ModalContent } from '@/components';
import { RestaurantMenuFullType } from '@/types';
import { th } from '@/lang';

import { Price } from '../components';

type RestaurantModalContentProps = {
	isFetching: boolean;
	isTopDish?: boolean;
	menu?: RestaurantMenuFullType;
	onClose: () => void;
};

const ContentTitle = ({ menu, isTopDish }: RestaurantModalContentProps) => {
	return (
		<div className='flex justify-between items-center'>
			<h4 className='text-lg md:text-xl'>
				{th.price} <Price menu={menu} />
			</h4>
			{isTopDish && <h4 className='text-lg md:text-xl'>{th.recommend}</h4>}
		</div>
	);
};

const ContentOptions = ({ menu }: RestaurantModalContentProps) => {
	if (!menu?.options?.length) {
		return <></>;
	}

	return (
		<ul className='border-t border-gray-200 pt-2 mt-2'>
			{menu?.options.map((option) => {
				return (
					<li key={option.label} className='mb-2'>
						<h6 className='mb-1 text-base md:text-lg'>{option.label}</h6>
						{option.choices.map((choice) => {
							return (
								<p key={`${option.label}-${choice.label}`} className='flex justify-between'>
									<span className='text-sm md:text-base'>{choice.label}</span>
									{/* TODO: Handle price */}
									<span className='text-sm md:text-base'>+0 {th.baht}</span>
								</p>
							);
						})}
					</li>
				);
			})}
		</ul>
	);
};

const RestaurantModalContent = (props: RestaurantModalContentProps) => {
	const { menu, isFetching, onClose } = props;

	return (
		<ModalContent title={menu?.name} onClose={onClose}>
			<CoverImage className='h-40 md:h-80' src={menu?.largeImage} alt={menu?.name} isFetching={isFetching} />
			<div className='py-2 px-4'>
				<ContentTitle {...props} />
				<ContentOptions {...props} />
			</div>
		</ModalContent>
	);
};

export default RestaurantModalContent;
