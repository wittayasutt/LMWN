import { useEffect } from 'react';

import uesRestaurants from '@/hooks/uesRestaurants';

import Layout from '@/components/layouts';
import Spinner from '@/components/spinner';
import Restautant from '@/components/restautants';

const App = () => {
	const { restaurant, fetchRestaurant, isLoadingRestaurant: isLoading } = uesRestaurants();

	useEffect(() => {
		fetchRestaurant();
	}, [fetchRestaurant]);

	if (isLoading) {
		return <Spinner isFull />;
	}

	return (
		<Layout title={restaurant?.name} description={restaurant?.name}>
			{restaurant ? <Restautant data={restaurant} /> : null}
		</Layout>
	);
};

export default App;
