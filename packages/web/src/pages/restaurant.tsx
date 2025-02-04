import { Container, CoverImage } from '@/components';
import { RestaurantList } from '@/features';
import { MainLayout } from '@/layouts';
import { useGetRestaurant } from '@/services';

type RestaurantPageProps = {
	id: string;
};

const RestaurantPage = ({ id }: RestaurantPageProps) => {
	const { data, isFetching } = useGetRestaurant(id);

	return (
		<MainLayout>
			<CoverImage src={data?.coverImage} alt={data?.name} isFetching={isFetching} />
			<Container>
				<RestaurantList data={data} isFetching={isFetching} />
			</Container>
		</MainLayout>
	);
};

export default RestaurantPage;
