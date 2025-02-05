import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from '@/theme';

const Spinner = () => {
	return (
		<div className='flex justify-center items-center'>
			<ClipLoader color={colors.primary} size={80} />
		</div>
	);
};

export default Spinner;
