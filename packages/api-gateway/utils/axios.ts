import axios from 'axios';

require('dotenv').config();

const $axios = axios.create({
	baseURL: process.env.API_BASE_URL,
});

$axios.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error),
);

export default $axios;
