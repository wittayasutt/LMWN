import express from 'express';
import { getRestaurant, getRestaurantMenu } from '../../services/restaurants';

const router = express.Router();

router.get('/:id', getRestaurant);
router.get('/:id/menus/:menuName', getRestaurantMenu);

export default router;
