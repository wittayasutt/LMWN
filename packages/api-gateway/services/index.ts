import axios from 'axios';

require('dotenv').config();

const $axios = axios.create({
	baseURL: process.env.API_BASE_URL,
});

export default $axios;
