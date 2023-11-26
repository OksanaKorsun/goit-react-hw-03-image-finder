import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImages = async (query, page) => {
  const params = new URLSearchParams({
    key: '39210626-76714a19412a01689ebadc3ae',
    page: page,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

  const responce = await axios.get(`?${params}`);
  return await responce.data;
};
