import {useState} from 'react';
import {authService} from '../services/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const forgotPassword = async email => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.forgotPassword(email);
      return response;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    forgotPassword,
    loading,
    error,
  };
};
