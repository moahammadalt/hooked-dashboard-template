import React, { useReducer, createContext, useEffect } from 'react';
import store from 'store';

import { SET_CATEGORIES, INIT_CATEGORIES } from '../actions';
import { categoryReducer } from '../reducers';
import { useFetch } from '../hooks';
import { URLS } from '../constants';


const StoreContext = createContext();

function StoreProvider({ children }) {
  
  // using a reducer and adding it to store code sample
  /* const [categoryState, categoryDispatch] = useReducer(categoryReducer);

  const setCategories = (categories) => {
    categoryDispatch({ type: SET_CATEGORIES, payload: categories})
  }

  const initCategories = () => {
    categoryDispatch({ type: INIT_CATEGORIES})
  }
  
  //important for adding the data fetching funtion of the reducer to the store.
  const { doFetch: doCategoriesFetchRequest } = useFetch();
  
  const doCategoriesFetch = () => {
    doCategoriesFetchRequest({url: URLS.categoryList, onSuccess: setCategories});
  } */

  //const authToken = store.get('authenticationToken');

  // this is for initialize data fetching after login
  /* useEffect(() => {
    if(authToken) {
      doCategoriesFetch();
    }
  }, [authToken]); */

  // initializing the store sample
  /* const initialStore = {
    data: {
      ...categoryState,
    },
    setCategories,
    initCategories,
    doCategoriesFetch,
  }; */

  const initialStore = {};
  
  return (
    <StoreContext.Provider value={initialStore}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider};