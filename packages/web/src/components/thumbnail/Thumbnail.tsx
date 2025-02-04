import clsx from 'clsx';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailProps = {
	className?: string;
};

const Thumbnail = ({ className }: ThumbnailProps) => {
	return (
		<div
			role='status'
			className={clsx('flex items-center justify-center w-full bg-gray-300 dark:bg-gray-300', className)}
		>
			<ThumbnailImage />
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

export default Thumbnail;
