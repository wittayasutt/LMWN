import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { RestaurantMenuType } from '@/types/restaurants';
import { serviceGetRestaurantFullMenu } from '@/services';

import MenuItem from '@/components/menu/item';
import ModalMenu from '@/components/modal/menu';

type MenuProps = {
	id: number;
	menus: string[];
};

const Wrapper = styled.ul``;

const MenuComponent = ({ id, menus }: MenuProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [selectedMenu, setSelectedItem] = useState<RestaurantMenuType | null>(null);

	const fetchMenu = useCallback(async (menu) => {
		setIsLoading(true);
		setSelectedItem(menu);

		try {
			const res = await serviceGetRestaurantFullMenu(id, menu.name);

			setSelectedItem(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const handleSelectMenu = (selectingMenu: RestaurantMenuType) => {
		fetchMenu(selectingMenu);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

	return (
		<>
			<Wrapper>
				{menus.map((menu, index) => {
					return <MenuItem key={index} id={id} menu={menu} onSelect={handleSelectMenu} />;
				})}
			</Wrapper>

			<ModalMenu menu={selectedMenu} isLoading={isLoading} isOpen={!!selectedMenu} onClose={handleCloseModal} />
		</>
	);
};

export default MenuComponent;
