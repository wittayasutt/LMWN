import { ThumbnailSkeleton, Thumbnail } from '@/components';

type CoverImageProps = {
	alt?: string;
	isFetching: boolean;
	src?: string | null;
};

const Image = ({ alt, isFetching, src }: CoverImageProps) => {
	if (isFetching) {
		return <ThumbnailSkeleton className='h-30 md:h-40 rounded-2xl' />;
	} else if (!src) {
		return <Thumbnail className='h-30 md:h-40 rounded-2xl' />;
	}

	return <img className='h-30 md:h-40 rounded-2xl' src={src} alt={alt} />;
};

const CoverImage = (props: CoverImageProps) => {
	return (
		<div className='w-30 min-w-30 md:w-40 md:min-w-40'>
			<Image {...props} />
		</div>
	);
};

export default CoverImage;
