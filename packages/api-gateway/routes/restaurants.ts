import express from 'express';
import {
	getRestaurant,
	getRestaurantShortMenu,
	getRestaurantFullMenu,
	getRestaurantTopDishes,
	getRestaurantMenuList,
} from '../controllers';

const router = express.Router();

router.get('/:id', getRestaurant);
router.get('/:id/menus', getRestaurantMenuList);
router.get('/:id/menus/:menuName/short', getRestaurantShortMenu);
router.get('/:id/menus/:menuName/full', getRestaurantFullMenu);
router.get('/:id/topDishes', getRestaurantTopDishes);

export default router;
