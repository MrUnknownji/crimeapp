import axios from 'axios';

const baseURL = 'https://paprola.in/public';

const apiClient = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
  },
});

export {apiClient};
