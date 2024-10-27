import axios from 'axios';

const BASE_URL = 'https://paprola.in/public/api';

export const authService = {
  forgotPassword: async email => {
    try {
      const response = await axios.post(`${BASE_URL}/forgot-password`, {
        email,
      });
      return response;
    } catch (error) {
      throw error.response
        ? error.response.data
        : new Error('Network error occurred');
    }
  },
};
