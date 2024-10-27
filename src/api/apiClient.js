import axios from 'axios';

const baseURL = 'https://paprola.in/public';

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
});

export {apiClient};
