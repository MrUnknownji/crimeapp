import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiClient} from './apiClient';

export const registerUser = async userData => {
  const response = await apiClient.post('/api/register', userData);
  return response;
};

export const loginUser = async userData => {
  const response = await apiClient.post('/api/login', userData);
  return response;
};

export const updateUser = async (userData, userId) => {
  console.log(userId);
  const response = await apiClient.put(`/api/users/${userId}`, userData);
  return response;
};

export const showUser = async loginToken => {
  const response = await apiClient.get('/api/profile', {
    headers: {
      Authorization: `Bearer ${loginToken}`,
    },
  });
  return response;
};

export const logoutUser = async userData => {
  const loginToken = await AsyncStorage.getItem('loginToken');
  const response = await apiClient.post('api/logout', userData, {
    headers: {
      Authorization: `Bearer ${loginToken}`,
    },
  });
  return response;
};

export const uploadImage = async imageData => {
  const loginToken = await AsyncStorage.getItem('loginToken');
  const response = await apiClient.post('/api/upload-image', imageData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${loginToken}`,
    },
  });
  return response;
};

export const getPosts = async () => {
  const loginToken = await AsyncStorage.getItem('loginToken');
  const response = await apiClient.get('/api/images', {
    headers: {
      Authorization: `Bearer ${loginToken}`,
    },
  });
  return response;
};
