import {useState, useCallback} from 'react';
import {
  loginUserService,
  logoutUserService,
  registerUserService,
  showUserService,
  updateUserService,
  uploadImageService,
} from '../services/userService';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = useCallback(async userData => {
    setLoading(true);
    setError(null);
    try {
      const registeredUser = await registerUserService(userData);
      setUser(registeredUser.data);
      return registeredUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async userData => {
    setLoading(true);
    setError(null);
    try {
      const loggedInUser = await loginUserService(userData);
      setUser(loggedInUser.data);
      return loggedInUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const update = useCallback(async (userData, userId) => {
    setLoading(true);
    setError(null);
    try {
      const updatedUser = await updateUserService(userData, userId);
      setUser(updatedUser.data);
      return updatedUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const loggedOutUser = await logoutUserService();
      setUser(null);
      return loggedOutUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to logout');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const show = useCallback(async loginToken => {
    setLoading(true);
    setError(null);
    try {
      const shownUser = await showUserService(loginToken);
      return shownUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to display user');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadImage = useCallback(async imageData => {
    setLoading(true);
    setError(null);
    try {
      const uploadedImage = await uploadImageService(imageData);
      return uploadedImage;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload image');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    register,
    login,
    update,
    logout,
    show,
    uploadImage,
  };
};
