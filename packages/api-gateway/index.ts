import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';

const app: Application = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
