import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://anapioficeandfire.com/',
});

export default axiosClient;
