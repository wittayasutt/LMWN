import clsx from 'clsx';

type TypographySkeletonProps = {
	className?: string;
};

const TypographySkeleton = ({ className }: TypographySkeletonProps) => {
	return (
		<div role='status' className='max-w-sm animate-pulse'>
			<div className={clsx('bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4', className)} />
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

export default TypographySkeleton;
