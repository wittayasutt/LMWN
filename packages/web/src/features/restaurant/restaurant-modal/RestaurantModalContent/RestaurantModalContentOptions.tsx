import { RestaurantOptionType } from '@/types';
import { th } from '@/lang';

type RestaurantModalContentOptionsProps = {
	options?: RestaurantOptionType[];
};

const RestaurantModalContentOptions = ({ options }: RestaurantModalContentOptionsProps) => {
	if (!options?.length) {
		return <></>;
	}

	return (
		<ul className='border-t border-gray-200 pt-2 mt-2'>
			{options.map((option) => {
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

export default RestaurantModalContentOptions;
