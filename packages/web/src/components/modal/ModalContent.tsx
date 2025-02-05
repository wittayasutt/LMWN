import { ReactNode } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ModalContentProps = {
	children?: ReactNode;
	title?: string;
	onClose: () => void;
};

const ModalContent = ({ children, title, onClose }: ModalContentProps) => {
	return (
		<div className='relative p-4 w-full max-w-2xl max-h-full'>
			<div className='relative bg-white rounded-lg shadow-sm'>
				<div className='flex justify-center items-center rounded-t'>
					<h3 className='flex-1 text-xl text-center pl-16'>{title}</h3>
					<div className='flex justify-center items-center h-16 w-16 cursor-pointer' onClick={onClose}>
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default ModalContent;
