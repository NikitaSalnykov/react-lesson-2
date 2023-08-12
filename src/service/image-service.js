import axios from 'axios';

const API_KEY = 'oOo6Lam1Q3bwjUE4NKHcYE9Za8PayqnJJ1Yp0aR3Fex19EO7kjXQmTyU';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};
