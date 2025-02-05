import clsx from 'clsx';
import { Thumbnail, ThumbnailSkeleton } from '@/components';

type CoverImageProps = {
	alt?: string;
	className?: string;
	isFetching?: boolean;
	src?: string | null;
};

const CoverImage = ({ alt, className, isFetching, src }: CoverImageProps) => {
	if (isFetching) {
		return <ThumbnailSkeleton className={className} />;
	} else if (!src) {
		return <Thumbnail className={className} />;
	}

	return <img className={clsx('w-full object-cover', className)} src={src} alt={alt} />;
};

export default CoverImage;
