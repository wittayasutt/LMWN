import { vi } from 'vitest';
import { mockRestaurantMenuFull } from '@/mocks';
import { useGetRestaurantMenuFull, useGetRestaurantTopDishes } from '@/services';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RestaurantModal, { RestaurantModalProps } from '../RestaurantModal';

vi.mock('@/services', () => ({
	useGetRestaurantMenuFull: vi.fn(),
	useGetRestaurantTopDishes: vi.fn(),
}));

describe('RestaurantModal Component', () => {
	const props: RestaurantModalProps = {
		menuName: mockRestaurantMenuFull.name,
		restaurantId: mockRestaurantMenuFull.id,
		onClose: vi.fn(),
	};

	describe('spinner', () => {
		it('given isFetching = true, should render spinner correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: true,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			expect(screen.getByTestId('spinner')).toBeInTheDocument();
		});
	});

	describe('detail', () => {
		it('given all the data, should render title correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockRestaurantMenuFull.name);
		});

		it('given all the data, should render image correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			const imgElement = screen.getByRole('img');

			expect(imgElement).toBeInTheDocument();
			expect(imgElement).toHaveAttribute('src', mockRestaurantMenuFull.largeImage);
			expect(imgElement).toHaveAttribute('alt', mockRestaurantMenuFull.name);
		});

		it('given all the data, should render price correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			expect(screen.getByText(/80 บาท/i)).toBeInTheDocument();
		});
	});

	describe('top dish', () => {
		it('given this dish is not a top dish, should not render top dish badge correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			expect(screen.queryByText(/ยอดขายดีที่สุดในร้าน/i)).not.toBeInTheDocument();
		});

		it('given this dish is a top dish, should render top dish badge correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [mockRestaurantMenuFull.name] });

			render(<RestaurantModal {...props} />);

			expect(screen.getByText(/ยอดขายดีที่สุดในร้าน/i)).toBeInTheDocument();
		});
	});

	describe('options', () => {
		it('given this options data, should render option title correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			expect(screen.queryByText('ไข่')).toBeInTheDocument();
		});

		it('given this options data, should render option label correctly', () => {
			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} />);

			expect(screen.queryByText('ไข่ดาว')).toBeInTheDocument();
		});
	});

	describe('click', () => {
		it('given all the data, should send close action correctly when click on backdrop', () => {
			const mockOnSelect = vi.fn();

			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} onClose={mockOnSelect} />);
			fireEvent.click(screen.getByTestId('modal-backdrop'));

			expect(mockOnSelect).toHaveBeenCalled();
		});

		it('given all the data, should send close action correctly when click on chevron icon', () => {
			const mockOnSelect = vi.fn();

			(useGetRestaurantMenuFull as jest.Mock).mockReturnValue({
				isFetching: false,
				data: mockRestaurantMenuFull,
			});
			(useGetRestaurantTopDishes as jest.Mock).mockReturnValue({ data: [] });

			render(<RestaurantModal {...props} onClose={mockOnSelect} />);
			fireEvent.click(screen.getByTestId('btn-close'));

			expect(mockOnSelect).toHaveBeenCalled();
		});
	});
});
