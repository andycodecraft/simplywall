// api.js
import axios from 'axios';
import config from 'config';
import { loadStripe } from '@stripe/stripe-js';

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${config.apiPath}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signinUser = async (email, password) => {
  try {
    const response = await axios.post(`${config.apiPath}/signin`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getSignToken = async (email) => {
  try {
    const response = await axios.post(`${config.apiPath}/getToken`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const checkoutStripe = async (priceId) => {
  try {
    const stripePromise = loadStripe(config.stripePubkey);
    const stripe = await stripePromise;

    const response = await fetch(`${config.apiPath}/checkoutStripe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw result.error.message;
    }
  } catch (error) {
    throw error;
  }
}

export const getStocks = async () => {
  try {
    const response = await axios.post(`${config.apiPath}/getStocks`);
    return response.data.response;
  } catch (error) {
    throw error.message;
  }
};

export const getTopStocks = async (email) => {
  try {
    const response = await axios.post(`${config.apiPath}/getTopStocks`);
    return response.data.response;
  } catch (error) {
    throw error.message;
  }
};

export const getTopStockById = async (stock_id) => {
  try {
    const response = await axios.post(`${config.apiPath}/getTopStockById`, {stock_id});
    return response.data.response[0];
  } catch (error) {
    throw error.message;
  }
};
