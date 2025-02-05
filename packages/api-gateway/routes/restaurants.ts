import express from 'express';
import {
	getRestaurant,
	getRestaurantShortMenu,
	getRestaurantFullMenu,
	getRestaurantTopDishes,
} from '../services/restaurants';

const router = express.Router();

router.get('/:id', getRestaurant);
router.get('/:id/menus/:menuName/short', getRestaurantShortMenu);
router.get('/:id/menus/:menuName/full', getRestaurantFullMenu);
router.get('/:id/topDishes', getRestaurantTopDishes);

export default router;
