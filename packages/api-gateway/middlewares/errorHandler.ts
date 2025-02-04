import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const isAxiosError = <T>(error: Error | AxiosError<T>): error is AxiosError<T> => {
	return 'isAxiosError' in error && error.isAxiosError;
};

const getResponseData = <T>(error: AxiosError<T>) => {
	const statusCode = error.response?.status || httpStatus.INTERNAL_SERVER_ERROR;
	const message = error.message || httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
	const method = error.config?.method?.toUpperCase() || 'UNKNOWN';

	return { statusCode, message, method };
};

export const errorHandler = (error: any, req: Request, res: Response) => {
	const { statusCode, message, method } = getResponseData(error);
	return res.status(statusCode).json({ message, method });
};

export const errorAxiosHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
	if (isAxiosError(error)) {
		errorHandler(error, req, res);
	} else {
		next(error);
	}
};

export const errorNotFoundHandler = (req: Request, res: Response) => {
	return res.status(httpStatus.NOT_FOUND).json({ message: httpStatus[httpStatus.NOT_FOUND], method: req.method });
};
