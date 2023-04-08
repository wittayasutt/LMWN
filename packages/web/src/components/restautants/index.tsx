import styled from 'styled-components';

import { RestaurantType } from '@/types/restaurants';

type Restautant = {
	data: RestaurantType;
};

const Wrapper = styled.div``;

const CoverImage = styled.img`
	width: 100%;
	height: 25rem;

	object-fit: cover;
`;

const Restautant = ({ data }: Restautant) => {
	return (
		<Wrapper>
			<CoverImage src={data.coverImage} alt={data.name} />
		</Wrapper>
	);
};

export default Restautant;
