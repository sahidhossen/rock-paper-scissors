import { BASE_URL } from '../constants';

export const fetchApi = async (url: string) => {
	return await fetch(BASE_URL + url)
		.then((response) => response.json())
		.then((data) => data);
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
