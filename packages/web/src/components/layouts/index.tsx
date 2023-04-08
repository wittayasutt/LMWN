import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

import Header from '@/components/headers';
import text from '@/const/text';

type LayoutProps = {
	children?: ReactNode;
	title?: string;
	description?: string;
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 100vh;
`;

const Main = styled.main`
	flex: 1;
`;

const DefaultLayout = ({ children, title = text.siteTitle, description = text.siteDescription }: LayoutProps) => {
	return (
		<HelmetProvider>
			<Header title={title} description={description} />
			<Wrapper>
				<Main>{children}</Main>
			</Wrapper>
		</HelmetProvider>
	);
};

export default DefaultLayout;
