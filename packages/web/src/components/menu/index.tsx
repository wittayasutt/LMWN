import styled from 'styled-components';
import MenuItem from '@/components/menu/item';

type MenuProps = {
	id: number;
	menus: string[];
};

const Wrapper = styled.ul``;

const MenuComponent = ({ id, menus }: MenuProps) => {
	return (
		<Wrapper>
			{menus.map((menu, index) => {
				return <MenuItem key={index} id={id} menu={menu} />;
			})}
		</Wrapper>
	);
};

export default MenuComponent;
