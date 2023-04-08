import { ReactNode } from 'react';
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
	background-color: ${(props) => props.theme.colors.background};
`;

const Main = styled.main`
	flex: 1;
`;

const DefaultLayout = ({ children, title = text.siteTitle, description = text.siteDescription }: LayoutProps) => {
	return (
		<>
			<Header title={title} description={description} />
			<Wrapper>
				<Main>{children}</Main>
			</Wrapper>
		</>
	);
};

export default DefaultLayout;
