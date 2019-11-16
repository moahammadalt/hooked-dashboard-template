import React, { useReducer, createContext } from 'react';

import { SET_CATEGORIES, INIT_CATEGORIES, INIT_COLORS, INIT_SIZES, SET_COLORS, SET_SIZES } from '../actions';
import { categoryReducer, sizeReducer, colorReducer } from '../reducers';
import { useFetch } from '../hooks';
import { URLS } from '../constants';


const StoreContext = createContext();

function StoreProvider({ children }) {
  
  const [categoryState, categoryDispatch] = useReducer(categoryReducer);
  const [sizeState, sizeDispatch ] = useReducer(sizeReducer);
  const [colorState, colorDispatch] = useReducer(colorReducer);

  const setCategories = (categories) => {
    categoryDispatch({ type: SET_CATEGORIES, payload: categories})
  }

  const initCategories = () => {
    categoryDispatch({ type: INIT_CATEGORIES})
  }

  const setSizes = (sizes) => {
    sizeDispatch({ type: SET_SIZES, payload: sizes})
  }

  const initSizes = () => {
    sizeDispatch({ type: INIT_SIZES})
  }

  const setColors = (colors) => {
    colorDispatch({ type: SET_COLORS, payload: colors})
  }

  const initcolors = () => {
    colorDispatch({ type: INIT_COLORS})
  }

  useFetch({url: URLS.categoryList, onSuccess: setCategories});
  useFetch({url: URLS.sizeList, onSuccess: setSizes});
  useFetch({url: URLS.colorList, onSuccess: setColors});
  
  const initialStore = {
    data: {
      ...categoryState,
      ...sizeState,
      ...colorState,
    },
    setCategories,
    initCategories,
    setSizes,
    initSizes,
    setColors,
    initcolors,
  };
  
  return (
    <StoreContext.Provider value={initialStore}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider};