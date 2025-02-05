import { vi } from 'vitest';
import { getIsBetweenByTime } from '@/helpers';
import { mockRestaurant } from '@/mocks';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RestaurantTitle, { RestaurantTitleProps } from '../RestaurantTitle';

vi.mock('@/helpers', () => ({
	getIsBetweenByTime: vi.fn(),
}));

describe('RestaurantTitle Component', () => {
	const props: RestaurantTitleProps = {
		data: mockRestaurant,
		isFetching: false,
	};

	it('given isFetching = true, should render skeleton correctly', () => {
		render(<RestaurantTitle {...props} isFetching={true} />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByRole('status')).toHaveClass('animate-pulse');
		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
	});

	it('given all the data, should render title correctly', () => {
		render(<RestaurantTitle {...props} />);

		expect(screen.getByRole('heading')).toHaveTextContent(mockRestaurant.name);
	});

	it("given all the data and it's on open time, should render badge correctly", () => {
		(getIsBetweenByTime as jest.Mock).mockReturnValue(true);

		render(<RestaurantTitle {...props} />);

		expect(screen.getByText(/เปิด/i)).toBeInTheDocument();
		expect(screen.getByText(/เปิด/i)).toHaveClass('bg-green-400');
	});

	it("given all the data and it's on open time, should render badge correctly", () => {
		(getIsBetweenByTime as jest.Mock).mockReturnValue(false);

		render(<RestaurantTitle {...props} />);

		expect(screen.getByText(/ปิด/i)).toBeInTheDocument();
		expect(screen.getByText(/ปิด/i)).toHaveClass('bg-red-400');
	});
});
