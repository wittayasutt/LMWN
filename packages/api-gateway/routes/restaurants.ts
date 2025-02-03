import express from 'express';
import { getRestaurant, getRestaurantShortMenu, getRestaurantFullMenu } from '../services/restaurants';

const router = express.Router();

router.get('/:id', getRestaurant);
router.get('/:id/menus/:menuName', getRestaurantShortMenu);
router.get('/:id/menus/:menuName/full', getRestaurantFullMenu);

export default router;
