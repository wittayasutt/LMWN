import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { RestaurantFullMenuType } from '@/types/restaurants';
import { serviceGetRestaurantFullMenu } from '@/services';

import MenuItem from '@/components/menu/item';
import ModalMenu from '@/components/modal/menu';

type MenuProps = {
	id: number;
	menus: string[];
};

const Wrapper = styled.ul``;

const MenuComponent = ({ id, menus }: MenuProps) => {
	const [selectedMenu, setSelectedItem] = useState<RestaurantFullMenuType | null>(null);

	const fetchMenu = useCallback(async (menu) => {
		try {
			const res = await serviceGetRestaurantFullMenu(id, menu);

			setSelectedItem(res);
		} catch (err) {
			console.error(err);
		}
	}, []);

	const handleSelectMenu = (selectingMenu: string) => {
		fetchMenu(selectingMenu);
	};

	return (
		<>
			<Wrapper>
				{menus.map((menu, index) => {
					return <MenuItem key={index} id={id} menu={menu} onSelect={handleSelectMenu} />;
				})}
			</Wrapper>

			{selectedMenu && <ModalMenu isOpen={!!selectedMenu} menu={selectedMenu} />}
		</>
	);
};

export default MenuComponent;
