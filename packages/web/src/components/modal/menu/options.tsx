import styled from 'styled-components';

import { RestaurantOptionType } from '@/types/restaurants';
import text from '@/const/text';

import Spinner from '@/components/spinner';

type OptionsProps = {
	options: RestaurantOptionType[] | null;
	isLoading: boolean;
};

const Options = styled.div`
	margin-bottom: 1rem;
`;

const OptionsTitle = styled.h5`
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

const OptionsChoices = styled.div``;

const OptionsChoice = styled.div`
	font-size: 0.9rem;
	line-height: 1.5rem;

	display: flex;
	justify-content: space-between;
`;

const OptionsComponent = ({ options, isLoading }: OptionsProps) => {
	if (isLoading) {
		return <Spinner isFull />;
	} else if (!options || !options.length) {
		return null;
	}

	return (
		<>
			{options.map((option, optionIndex) => (
				<Options key={optionIndex}>
					<OptionsTitle>{option.label}</OptionsTitle>
					{option.choices.length && (
						<OptionsChoices>
							{option.choices.map((choice, choiceIndex) => (
								<OptionsChoice key={choiceIndex}>
									<span>{choice.label}</span>
									<span>{text.free}</span>
								</OptionsChoice>
							))}
						</OptionsChoices>
					)}
				</Options>
			))}
		</>
	);
};

export default OptionsComponent;
