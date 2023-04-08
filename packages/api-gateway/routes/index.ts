import express from 'express';

// routers
import restaurants from './restaurants';

const router = express.Router();

// bind routes
router.use('/restaurants', restaurants);

export default router;
