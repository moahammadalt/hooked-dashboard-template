import { useState, useContext, useEffect } from 'react';
import { LayoutContext } from '../contexts';

import { API, extractDataObject } from '../utils/API';

export function useFetch(fetchInitialObj) {
  const [data, setData] = useState(null);
  const [fetchObj, doFetch] = useState(fetchInitialObj);
  const {
    loading,
    setLoading,
    error,
    setError,
    setSuccessNotification
  } = useContext(LayoutContext);
  
  useEffect(() => {

    const fetchData = async () => {
      setError(null);
      fetchObj.showSuccessNotification && setSuccessNotification(false);
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
            res = fetchObj.params
              ? await API.post(fetchObj.url, fetchObj.params)
              : await API.get(fetchObj.url);
            break;
        }
        
        setData(res);
        
        !!fetchObj.onSuccess && fetchObj.onSuccess(extractDataObject(res));

        fetchObj.showSuccessNotification &&
          setSuccessNotification(
            fetchObj.successMessage || 'request has been done successfully.'
          );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    !!fetchObj && fetchData();

    doFetch(null);
  }, [ fetchObj ]);

  return {
    data: extractDataObject(data),
    error,
    loading,
    doFetch,
  };
}
