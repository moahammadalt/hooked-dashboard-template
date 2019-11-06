import React, { useState, useEffect, useContext } from 'react';

import { LoadingContext } from '../contexts';

import { API, setAuthorizationToken } from '../utils/API';

export function useFetch(url, options) {
  console.log('url: ', url);
  const [response, setResponse] = useState({});
  const {
    loading: [ loading, setLoading ]
  } = useContext(LoadingContext);

  useEffect(() => {
    async function fetchData() {
      console.log('fetchData: ');
      setLoading(true);
      try {
        const res = (options ? await API.post(url, options) : await API.get(url, options));
        setResponse(res);
      }
      catch (err) {
        console.log('err: ', err);
      }
      
      setTimeout(() => {
        setLoading(false);
      }, 3000)
      //setLoading(false);
      
      
    }
    !!url && fetchData();
  }, [url]);
  return response;
}

/* const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
}; */
