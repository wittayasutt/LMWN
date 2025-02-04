import { CoverImage } from '@/components';
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
		</MainLayout>
	);
};

export default RestaurantPage;
