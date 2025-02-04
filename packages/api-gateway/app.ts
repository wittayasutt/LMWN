import cors from 'cors';
import express, { Application } from 'express';
import routes from './routes';
import { errorHandler, errorAxiosHandler, errorNotFoundHandler } from './middlewares';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

// handle error
app.use(errorNotFoundHandler);
app.use(errorAxiosHandler);
app.use(errorHandler);

export default app;
