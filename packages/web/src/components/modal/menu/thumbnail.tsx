import styled from 'styled-components';

type ThumbnailProps = {
	alt: string;
	thumbnail: string | null;
	large: string | null;
};

const ThumbnailImage = styled.img`
	width: 100%;
	height: 20rem;

	object-fit: cover;
`;

const MockImage = styled.img`
	width: 100%;
	height: 20rem;

	background-color: ${(props) => props.theme.colors.grey2};
	object-fit: cover;
`;

const ThumbnailComponent = ({ alt, thumbnail, large }: ThumbnailProps) => {
	if (large) {
		return <ThumbnailImage src={large} alt={alt} />;
	} else if (thumbnail) {
		return <ThumbnailImage src={thumbnail} alt={alt} />;
	}

	return <MockImage />;
};

export default ThumbnailComponent;
