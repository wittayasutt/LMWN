import styled from 'styled-components';

import { RestaurantType } from '@/types/restaurants';

import Container from '@/components/container';
import Title from '@/components/title';
import Menu from '@/components/menu';

type RestautantProps = {
	data: RestaurantType;
};

const Wrapper = styled.div``;

const CoverImage = styled.img`
	width: 100%;
	height: 25rem;

	object-fit: cover;
`;

const RestautantComponent = ({ data }: RestautantProps) => {
	return (
		<Wrapper>
			<CoverImage src={data.coverImage} alt={data.name} />
			<Container>
				<Title title={data.name} />
				<Menu id={data.id} menus={data.menus} />
			</Container>
		</Wrapper>
	);
};

export default RestautantComponent;
