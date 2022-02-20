export const fetchApi = async (url: string) => {
	return await fetch(url)
		.then((response) => response.json())
		.then((data) => data);
};
