import {apiClient} from './apiClient';

export const forgotPassword = async email => {
  const response = await apiClient.post('/api/forgot-password', {email});
  return response;
};

export const resetPassword = async resetData => {
  const response = await apiClient.post('/api/reset-password', resetData);
  return response.data;
};
