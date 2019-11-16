import axios from 'axios';

const baseURL = `${
  window.location.hostname === 'localhost'
    ? 'http://localhost:1000'
    : window.location.origin
}`;

export const API = axios.create({
  baseURL: `${baseURL}/adminAPI/`,
});

export const setAuthorizationToken = token => {

  if (token) {
    API.defaults.headers.common['Authorization'] = token;
  }
  else {
    delete API.defaults.headers.common['Authorization'];
  }
};

export const removeAuthorizationToken = () => {

  delete axios.defaults.headers.common['Authorization'];
};

export const handleRequestError = error => {
  const genericError = 'Generic error happened';
  if(!error) return genericError;

  if(error.response && error.response.data) {
    return error.response.data.errorMessage || error.message || genericError;
  }

  if(error.message) return error.message;

  return genericError;
};

export const extractDataObject = (data) => data && data.data && data.data.data ? data.data.data : {};
