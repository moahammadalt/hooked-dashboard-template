
import React, { useState, useContext, useEffect } from 'react';
import { LoadingContext } from '../contexts';

import { API, setAuthorizationToken } from '../utils/API';

export function useFetch({} = {}) {
  // ---- State
  const [data, setData] = useState(null);
  const [fetchObj, doFetch] = useState(null);
  const { loading, setLoading } = useContext(LoadingContext);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    try {
      setLoading(true);
      let res = null;
      switch (fetchObj.method) {
        case 'GET':
          res = await API.get(fetchObj.url);
          break;

        case 'POST':
          res = await API.post(fetchObj.url, fetchObj.params);
          break;

        case 'FILE_POST':
          res = await API.post(fetchObj.url, fetchObj.params);
          break;
      
        default:
          res = fetchObj.params ? await API.post(fetchObj.url, fetchObj.params) : await API.get(fetchObj.url)
          break;
      }

      setData(res);
    } catch (err) {
      console.log('err: ', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    !!fetchObj && fetchData();

    doFetch(null);
  }, [fetchObj]);

  return {data, error, loading, doFetch};
}