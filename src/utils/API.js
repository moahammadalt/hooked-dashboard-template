import axios from 'axios';

const baseURL = `${
  window.location.hostname === 'localhost'
    ? 'http://localhost:1000'
    : window.location.origin
}`;

export const setAuthorizationToken = token => {

  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const removeAuthorizationToken = () => {

  delete axios.defaults.headers.common['Authorization'];
};
  
export const API = axios.create({
  baseURL: `${baseURL}/adminAPI/`,
});
