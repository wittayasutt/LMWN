import express, { Application } from 'express';
import routes from './routes';
import { errorAxiosHandler, errorHandler } from './middlewares';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

// handle error
app.use(errorAxiosHandler);
app.use(errorHandler);

export default app;
