import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CoverImage, { CoverImageProps } from '../CoverImage';

describe('CoverImage Component', () => {
	const props: CoverImageProps = {
		alt: 'Cover Image',
		className: 'h-60 md:h-80',
		isFetching: false,
		src: 'https://img.wongnai.com/p/100x100/2021/08/14/95cf2410d1734ca7905672446141a699.jpg',
	};

	it('given isFetching = true, should render skeleton correctly', () => {
		render(<CoverImage {...props} isFetching={true} />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByRole('status')).toHaveClass('animate-pulse');
		expect(screen.queryByRole('img')).not.toBeInTheDocument();
	});

	it("given isFetching = false, src = '', should render skeleton correctly", () => {
		render(<CoverImage {...props} src='' />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByRole('status')).not.toHaveClass('animate-pulse');
		expect(screen.queryByRole('img')).not.toBeInTheDocument();
	});

	it('given all the data, should render image correctly', () => {
		render(<CoverImage {...props} />);

		const imgElement = screen.getByRole('img');

		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveAttribute('src', props.src);
		expect(imgElement).toHaveAttribute('alt', props.alt);
	});
});
