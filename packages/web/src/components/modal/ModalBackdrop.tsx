import { ReactNode } from 'react';

type ModalBackdropProps = {
	children?: ReactNode;
	onClose?: () => void;
};

const ModalBackdrop = ({ children, onClose }: ModalBackdropProps) => {
	return (
		<div className='flex overflow-hidden fixed top-0 left-0 z-50 justify-center items-center w-full h-full'>
			<div
				className='absolute w-full h-full bg-gray-600 opacity-80'
				data-testid='modal-backdrop'
				onClick={onClose}
			/>
			{children}
		</div>
	);
};

export default ModalBackdrop;
