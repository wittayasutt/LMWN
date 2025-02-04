import { MainLayout } from '@/layouts';
import { useGetRestaurant } from '@/services';

type RestaurantPageProps = {
	id: string;
};

const RestaurantPage = ({ id }: RestaurantPageProps) => {
	const { data } = useGetRestaurant(id);

	return (
		<MainLayout>
			<h1>Edit this app to complete LINE MAN Wongnai Frontend Assignment!</h1>
		</MainLayout>
	);
};

export default RestaurantPage;
