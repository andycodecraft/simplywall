// api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Adjust the base URL as necessary

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signinUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getSignToken = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/getToken`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
