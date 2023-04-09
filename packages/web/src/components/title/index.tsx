import { useEffect, useState } from 'react';

import styled from 'styled-components';
import text from '@/const/text';
import { ActiveTimePeriodType } from '@/types/restaurants';

import uesRestaurants from '@/hooks/uesRestaurants';

type TitleProps = {
	title: string;
	activeTimePeriod: ActiveTimePeriodType;
};

type StatusProp = {
	isOpen: boolean;
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;

	margin: 1rem 0 1.5rem;
`;

const Title = styled.h1`
	font-size: 1.5rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 2rem;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		font-size: 2.5rem;
	}
`;

const StatusWrapper = styled.div`
	margin-left: 0.5rem;
`;

const Status = styled.span<StatusProp>`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 3rem;
	border-radius: 0.25rem;

	font-size: 0.75rem;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => (props.isOpen ? props.theme.colors.primary : props.theme.colors.red)};

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		width: 4rem;
		font-size: 1rem;
	}
`;

const TitleComponent = ({ title, activeTimePeriod }: TitleProps) => {
	const { getIsRestaurantOpen } = uesRestaurants();

	const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);

	useEffect(() => {
		const isOpen = getIsRestaurantOpen(activeTimePeriod);
		setIsRestaurantOpen(isOpen);
	}, [activeTimePeriod]);

	return (
		<Wrapper>
			<Title>{title}</Title>
			<StatusWrapper>
				<Status isOpen={isRestaurantOpen}>{isRestaurantOpen ? text.open : text.close}</Status>
			</StatusWrapper>
		</Wrapper>
	);
};

export default TitleComponent;
