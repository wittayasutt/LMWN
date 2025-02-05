import { vi } from 'vitest';
import { mockRestaurantMenu } from '@/mocks';
import { useGetRestaurantMenu, useGetRestaurantTopDishes } from '@/services';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RestaurantItem, { RestaurantItemProps } from '../restaurant-items/RestaurantItem';

vi.mock('@/services', () => ({
	useGetRestaurantMenu: vi.fn(),
	useGetRestaurantTopDishes: vi.fn(),
}));

describe('RestaurantItem Component', () => {
	const props: RestaurantItemProps = {
		menuName: mockRestaurantMenu.name,
		restaurantId: mockRestaurantMenu.id,
		isFetching: false,
		onSelect: vi.fn(),
	};

	describe('skeleton', () => {
		it('given isFetching = true, should render skeleton correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} isFetching={true} />);

			const skeletons = screen.getAllByRole('status');
			expect(skeletons.length).toBeGreaterThan(0);
		});

		it('given isFetching = false but isFetching on service is true, should render skeleton correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: true,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} />);

			const skeletons = screen.getAllByRole('status');
			expect(skeletons.length).toBeGreaterThan(0);
		});
	});

	describe('detail', () => {
		it('given all the data, should render image correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} />);

			const imgElement = screen.getByRole('img');

			expect(imgElement).toBeInTheDocument();
			expect(imgElement).toHaveAttribute('src', mockRestaurantMenu.thumbnailImage);
			expect(imgElement).toHaveAttribute('alt', mockRestaurantMenu.name);
		});

		it('given all the data, should render menu name correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} />);

			expect(screen.getByRole('heading')).toHaveTextContent(mockRestaurantMenu.name);
		});

		it('given all the data, should render price correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} />);

			expect(screen.getByText(/80 บาท/i)).toBeInTheDocument();
		});
	});

	describe('top dish', () => {
		it('given this dish is not a top dish, should not render top dish badge correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} />);

			expect(screen.queryByTestId('top-dish')).not.toBeInTheDocument();
		});

		it('given this dish is a top dish, should render top dish badge correctly', () => {
			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [mockRestaurantMenu.name] });

			render(<RestaurantItem {...props} />);

			expect(screen.getByTestId('top-dish')).toBeInTheDocument();
		});
	});

	describe('click', () => {
		it('given all the data, should send select data correctly', () => {
			const mockOnSelect = vi.fn();

			(useGetRestaurantMenu as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenu,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantItem {...props} onSelect={mockOnSelect} />);
			fireEvent.click(screen.getByRole('heading'));

			expect(mockOnSelect).toHaveBeenCalledWith(mockRestaurantMenu.name);
		});
	});
});
