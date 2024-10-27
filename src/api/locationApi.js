import {apiClient} from './apiClient';

export const geocode = async address => {
  const response = await apiClient.get('/api/geocode', {params: {address}});
  return response;
};

export const reverseGeocode = async (latitude, longitude) => {
  const response = await apiClient.get('/api/reverse-geocode', {
    params: {latitude, longitude},
  });
  return response;
};

export const getSearchLocationUI = async () => {
  const response = await apiClient.get('/api/gangs', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response;
};
