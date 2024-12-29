import {
  registerUser,
  loginUser,
  updateUser,
  showUser,
  logoutUser,
  uploadImage,
  getPosts,
} from '../api/userApi';

export const registerUserService = async userData => {
  return await registerUser(userData);
};
export const loginUserService = async userData => {
  return await loginUser(userData);
};
export const updateUserService = async (userData, userId) => {
  return await updateUser(userData, userId);
};
export const showUserService = async loginToken => {
  return await showUser(loginToken);
};
export const logoutUserService = async userData => {
  return await logoutUser(userData);
};
export const uploadImageService = async imageData => {
  return await uploadImage(imageData);
};
export const getPostsService = async () => {
  return await getPosts();
};
