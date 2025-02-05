import { ThumbnailSkeleton, Thumbnail } from '@/components';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CoverImageProps = {
	alt?: string;
	isFetching: boolean;
	isTopDish?: boolean;
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
	const { isTopDish } = props;

	return (
		<div className='w-30 min-w-30 md:w-40 md:min-w-40 relative'>
			<Image {...props} />
			{isTopDish && (
				<FontAwesomeIcon
					className='absolute -top-2 -right-2 text-3xl text-red-400'
					icon={faFire}
					data-testid='top-dish'
				/>
			)}
		</div>
	);
};

export default CoverImage;
