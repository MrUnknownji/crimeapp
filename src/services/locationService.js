import {geocode, getSearchLocationUI, reverseGeocode} from '../api/locationApi';

export const geocodeService = async address => {
  return await geocode(address);
};

export const reverseGeocodeService = async (latitude, longitude) => {
  return await reverseGeocode(latitude, longitude);
};

export const getSearchLocationUIService = async () => {
  return await getSearchLocationUI();
};
