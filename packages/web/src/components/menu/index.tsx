import { useEffect } from 'react';
import styled from 'styled-components';

import uesRestaurants from '@/hooks/uesRestaurants';
import { RestaurantMenuType } from '@/types/restaurants';

import MenuItem from '@/components/menu/item';
import ModalMenu from '@/components/modal/menu';

type MenuProps = {
	id: number;
	menus: string[];
};

const Wrapper = styled.ul``;

const MenuComponent = ({ id, menus }: MenuProps) => {
	const {
		setMenuLength,
		addTopDish,
		topDishes,

		restaurantFullMenu,
		setRestaurantFullMenu,
		fetchRestaurantFullMenu,
		isLoadingRestaurantFullMenu: isLoading,
	} = uesRestaurants();

	const handleFetchSuccess = (data: RestaurantMenuType) => {
		addTopDish(data);
	};

	const handleSelectMenu = (selectingMenu: RestaurantMenuType) => {
		fetchRestaurantFullMenu(id, selectingMenu);
	};

	const handleCloseModal = () => {
		setRestaurantFullMenu(null);
	};

	useEffect(() => {
		setMenuLength(menus.length);
	}, [menus]);

	return (
		<>
			<Wrapper>
				{menus.map((menu, index) => {
					return (
						<MenuItem
							key={index}
							id={id}
							menu={menu}
							topDishes={topDishes}
							onFetchSuccess={handleFetchSuccess}
							onSelect={handleSelectMenu}
						/>
					);
				})}
			</Wrapper>

			<ModalMenu
				menu={restaurantFullMenu}
				topDishes={topDishes}
				isLoading={isLoading}
				isOpen={!!restaurantFullMenu}
				onClose={handleCloseModal}
			/>
		</>
	);
};

export default MenuComponent;
