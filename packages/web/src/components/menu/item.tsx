import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import uesRestaurants from '@/hooks/uesRestaurants';
import { theme } from '@/styles/theme';

import Thumbnail from '@/components/menu/thumbnail';
import Price from '@/components/menu/price';

type MenuProps = {
	id: number;
	menu: string;
	topDishes: string[];
	onFetchSuccess: Function;
	onSelect: Function;
};

type WrapperProps = {
	fetching: boolean;
};

const Wrapper = styled.li<WrapperProps>`
	display: flex;
	width: 100%;

	background-color: ${(props) => (props.fetching ? props.theme.colors.grey : props.theme.colors.white)};
	margin-bottom: 1rem;

	opacity: ${(props) => (props.fetching ? 0.2 : 1)};
	cursor: pointer;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		margin-bottom: 0.5rem;
		padding: 0.5rem;
	}
`;

const ThumbnailWrapper = styled.div`
	position: relative;
`;

const IconFire = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;

	position: absolute;
	top: -1rem;
	right: -1rem;
`;

const TextWrapper = styled.div`
	padding-left: 1rem;
`;

const Title = styled.h4`
	line-height: 2rem;
`;

const MenuItemComponent = ({ id, menu, topDishes, onFetchSuccess, onSelect }: MenuProps) => {
	const { restaurantShortMenu, fetchRestaurantShortMenu, isLoadingRestaurantShortMenu: isLoading } = uesRestaurants();

	const [isTopDish, setIsTopDish] = useState(false);

	const handleSelectMenu = () => {
		onSelect(restaurantShortMenu);
	};

	useEffect(() => {
		fetchRestaurantShortMenu(id, menu);
	}, [id, menu]);

	useEffect(() => {
		if (restaurantShortMenu) {
			onFetchSuccess(restaurantShortMenu);
		}
	}, [restaurantShortMenu]);

	useEffect(() => {
		if (topDishes.length && topDishes.includes(menu)) {
			setIsTopDish(true);
		}
	}, [topDishes]);

	return (
		<Wrapper fetching={isLoading} onClick={handleSelectMenu}>
			<ThumbnailWrapper>
				<Thumbnail
					thumbnail={restaurantShortMenu?.thumbnailImage ?? null}
					alt={restaurantShortMenu?.name ?? ''}
				/>
				{isTopDish && <IconFire icon={faFire} color={theme.colors.red} />}
			</ThumbnailWrapper>
			{!isLoading && (
				<TextWrapper>
					<Title>{restaurantShortMenu?.name}</Title>
					<Price menu={restaurantShortMenu} />
				</TextWrapper>
			)}
		</Wrapper>
	);
};

export default MenuItemComponent;
