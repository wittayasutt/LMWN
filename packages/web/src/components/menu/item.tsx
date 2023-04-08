import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import text from '@/const/text';
import { RestaurantShortMenuType } from '@/types/restaurants';
import { serviceGetRestaurantShortMenu } from '@/services';

import Thumbnail from '@/components/menu/thumbnail';

type MenuProps = {
	id: number;
	menu: string;
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

const TextWrapper = styled.div`
	padding-left: 1rem;
`;

const Title = styled.h4`
	line-height: 2rem;
`;

const Price = styled.span``;

const MenuItemComponent = ({ id, menu }: MenuProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [shortMenu, setShortMenu] = useState<RestaurantShortMenuType>();

	const fetchMenu = useCallback(async (menu) => {
		try {
			const res = await serviceGetRestaurantShortMenu(id, menu);

			setShortMenu(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchMenu(menu);
	}, [id, menu]);

	return (
		<Wrapper fetching={isLoading}>
			<Thumbnail thumbnail={shortMenu?.thumbnailImage ?? null} alt={shortMenu?.name ?? ''} />
			{!isLoading && (
				<TextWrapper>
					<Title>{shortMenu?.name}</Title>
					<Price>
						{shortMenu?.fullPrice} {text.baht}
					</Price>
				</TextWrapper>
			)}
		</Wrapper>
	);
};

export default MenuItemComponent;
