import { ReactNode, Suspense } from 'react';
import { Spinner } from '@/components';

type LayoutProps = {
	children?: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<div className='min-h-screen'>
			<Suspense fallback={<Spinner />}>{children}</Suspense>
		</div>
	);
};

export default MainLayout;
