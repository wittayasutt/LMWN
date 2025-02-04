import clsx from 'clsx';
import ThumbnailImage from './ThumbnailImage';

type SkeletonProps = {
	className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
	return (
		<div
			role='status'
			className={clsx(
				'flex items-center justify-center w-full bg-gray-300 animate-pulse dark:bg-gray-300',
				className,
			)}
		>
			<ThumbnailImage />
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

export default Skeleton;
