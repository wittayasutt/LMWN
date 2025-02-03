import express, { Application } from 'express';
import routes from './routes';
import { errorAxiosHandler, errorHandler } from './middlewares';

const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

// handle error
app.use(errorAxiosHandler);
app.use(errorHandler);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
