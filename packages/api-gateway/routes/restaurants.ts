import express from 'express';
import { getRestaurant } from '../services/restaurants';

const router = express.Router();

router.get('/:id', getRestaurant);

export default router;
