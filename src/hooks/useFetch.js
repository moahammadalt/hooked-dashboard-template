import { useState, useContext, useEffect } from 'react';
import { LayoutContext } from '../contexts';

import { API, extractDataObject } from '../utils/API';

function useFetch(fetchInitialObj) {
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
      setSuccessNotification(false);
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
            var formData = new FormData();
            for (const key in fetchObj.params) {
              formData.append(key, fetchObj.params[key]);
            }
            res = await API.post(fetchObj.url, formData, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
            break;

          default:
            res = fetchObj.params
              ? await API.post(fetchObj.url, fetchObj.params)
              : await API.get(fetchObj.url);
            break;
        }

        setData(res);

        !!fetchObj.onSuccess && fetchObj.onSuccess(extractDataObject(res));
        !!fetchInitialObj &&
          fetchInitialObj.onSuccess &&
          fetchInitialObj.onSuccess(extractDataObject(res));

        fetchObj.showSuccessNotification &&
          setSuccessNotification(
            fetchObj.successMessage || 'request has been done successfully.'
          );
      } catch (err) {
        !!fetchObj.onError && fetchObj.onError(err);
        !!fetchInitialObj &&
          fetchInitialObj.onError &&
          fetchInitialObj.onError(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    !!fetchObj && !!fetchObj.url && fetchData();

    doFetch(null);
  }, [fetchObj]);

  const defaultResponseValue =
    (fetchObj && fetchObj.defaultValue) ||
    (fetchInitialObj && fetchInitialObj.defaultValue);

  return {
    data: extractDataObject(data, defaultResponseValue),
    error,
    loading,
    doFetch
  };
}

export default useFetch;
