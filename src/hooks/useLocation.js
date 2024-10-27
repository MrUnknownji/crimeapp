import {useState, useCallback} from 'react';
import {
  geocodeService,
  getSearchLocationUIService,
  reverseGeocodeService,
} from '../services/locationService';

export const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGeocode = useCallback(async address => {
    setLoading(true);
    setError(null);
    try {
      const result = await geocodeService(address);
      return result.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to geocode');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getReverseGeocode = useCallback(async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    try {
      const result = await reverseGeocodeService(latitude, longitude);
      return result.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reverse geocode');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getSearchLocationUI = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getSearchLocationUIService();
      return result;
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to get search location UI',
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getGeocode,
    getReverseGeocode,
    getSearchLocationUI,
  };
};
