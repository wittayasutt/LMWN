import clsx from 'clsx';
import { useMemo } from 'react';
import { TypographySkeleton } from '@/components';
import { getIsBetweenByTime } from '@/helpers';
import { RestaurantType } from '@/types';
import { th } from '@/lang';

export type RestaurantTitleProps = {
	data?: RestaurantType;
	isFetching: boolean;
};

const RestaurantTitle = ({ data, isFetching }: RestaurantTitleProps) => {
	const isOpened = useMemo(() => {
		if (!data?.activeTimePeriod) {
			return false;
		}

		return getIsBetweenByTime(data.activeTimePeriod.open, data.activeTimePeriod.close);
	}, [data]);

	if (isFetching) {
		return <TypographySkeleton className='h-9 pb-6' />;
	}

	return (
		<div className='flex items-center pb-4'>
			<h1 className='text-3xl'>{data?.name}</h1>
			<div
				className={clsx(
					'flex justify-center items-center h-6 w-12 rounded text-sm text-white ml-2',
					isOpened ? 'bg-green-400' : 'bg-red-400',
				)}
			>
				{isOpened ? th.open : th.close}
			</div>
		</div>
	);
};

export default RestaurantTitle;
