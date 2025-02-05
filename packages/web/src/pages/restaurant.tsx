import { useState } from 'react';
import { Container, CoverImage } from '@/components';
import { RestaurantList, RestaurantModal } from '@/features/restaurant';
import { MainLayout } from '@/layouts';
import { useGetRestaurant } from '@/services';

type RestaurantPageProps = {
	id: string;
};

const RestaurantPage = ({ id }: RestaurantPageProps) => {
	const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
	const { data, isFetching } = useGetRestaurant(id);

	const handleSelectMenu = (menuName: string | null) => {
		setSelectedMenu(menuName);
	};

	return (
		<>
			<MainLayout>
				<CoverImage className='h-60 md:h-80' src={data?.coverImage} alt={data?.name} isFetching={isFetching} />
				<Container>
					<RestaurantList data={data} isFetching={isFetching} onSelectMenu={handleSelectMenu} />
				</Container>
				{selectedMenu && (
					<RestaurantModal menuName={selectedMenu} restaurantId={id} onClose={() => handleSelectMenu(null)} />
				)}
			</MainLayout>
		</>
	);
};

export default RestaurantPage;
