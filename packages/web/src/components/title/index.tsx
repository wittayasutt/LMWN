import styled from 'styled-components';
import text from '@/const/text';

type TitleProps = {
	title: string;
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;

	margin: 1rem 0 1.5rem;
`;

const Title = styled.h1`
	font-size: 1.5rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 2.5rem;
	}
`;

const StatusWrapper = styled.div`
	margin-left: 0.5rem;
`;

const Status = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 3rem;
	border-radius: 0.25rem;

	font-size: 0.75rem;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.primary};

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		width: 4rem;
		font-size: 1rem;
	}
`;

const TitleComponent = ({ title }: TitleProps) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<StatusWrapper>
				<Status>{text.open}</Status>
			</StatusWrapper>
		</Wrapper>
	);
};

export default TitleComponent;
