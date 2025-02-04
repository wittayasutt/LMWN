import { ReactNode } from 'react';

type LayoutProps = {
	children?: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
	return <>{children}</>;
};

export default MainLayout;
