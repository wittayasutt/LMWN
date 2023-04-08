import styled from 'styled-components';

type ThumbnailProps = {
	alt: string;
	thumbnail: string | null;
};

const ThumbnailImage = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 1rem;

	object-fit: cover;
`;

const MockImage = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 1rem;

	background-color: ${(props) => props.theme.colors.grey2};
`;

const ThumbnailComponent = ({ alt, thumbnail }: ThumbnailProps) => {
	if (!thumbnail) {
		return <MockImage />;
	}

	return <ThumbnailImage src={thumbnail} alt={alt} />;
};

export default ThumbnailComponent;
