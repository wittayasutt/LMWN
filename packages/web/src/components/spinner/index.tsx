import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { theme } from '@/styles/theme';

type SpinnerWrapper = {
	isFull?: boolean;
};

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 5rem;
`;

const SpinnerWrapperFull = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;
`;

const Spinner = ({ isFull = false }: SpinnerWrapper) => {
	if (isFull) {
		return (
			<SpinnerWrapperFull>
				<ClipLoader color={theme.colors.primary} />
			</SpinnerWrapperFull>
		);
	}

	return (
		<SpinnerWrapper>
			<ClipLoader color={theme.colors.primary} />
		</SpinnerWrapper>
	);
};

export default Spinner;
