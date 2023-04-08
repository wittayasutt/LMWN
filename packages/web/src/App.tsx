import { useCallback, useEffect, useState } from 'react';

import { RestaurantType } from '@/types/restaurants';
import { serviceGetRestaurant } from '@/services';

import Layout from '@/components/layouts';
import Spinner from '@/components/spinner';
import Restautant from '@/components/restautants';

const RESTAURANT_ID = 567051;

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [restaurant, setRestaurant] = useState<RestaurantType | null>();

	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const res = await serviceGetRestaurant(RESTAURANT_ID);
			setRestaurant(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	if (isLoading) {
		return <Spinner isFull />;
	}

	return <Layout>{restaurant ? <Restautant data={restaurant} /> : null}</Layout>;
};

export default App;
