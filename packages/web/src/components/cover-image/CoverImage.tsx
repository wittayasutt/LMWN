import { ThumbnailSkeleton } from '@/components';

type CoverImageProps = {
	alt?: string;
	isFetching: boolean;
	src?: string;
};

const CoverImage = ({ alt, isFetching, src }: CoverImageProps) => {
	if (isFetching) {
		return <ThumbnailSkeleton className='h-80' />;
	}

	return <img className='h-80 w-full object-cover' src={src} alt={alt} />;
};

export default CoverImage;
