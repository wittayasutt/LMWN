import { useState } from 'react';
import { Container, CoverImage } from '@/components';
import { RestaurantList } from '@/features';
import { MainLayout } from '@/layouts';
import { useGetRestaurant } from '@/services';

type RestaurantPageProps = {
	id: string;
};

const RestaurantPage = ({ id }: RestaurantPageProps) => {
	const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
	const { data, isFetching } = useGetRestaurant(id);

	const handleSelectMenu = (menuName: string) => {
		setSelectedMenu(menuName);
	};

	return (
		<MainLayout>
			<CoverImage src={data?.coverImage} alt={data?.name} isFetching={isFetching} />
			<Container>
				<RestaurantList data={data} isFetching={isFetching} onSelectMenu={handleSelectMenu} />
			</Container>
		</MainLayout>
	);
};

export default RestaurantPage;
