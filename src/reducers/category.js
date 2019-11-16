import { SET_CATEGORIES, INIT_CATEGORIES } from '../actions';

export const categoryInitialState = [];

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { categoryies: action.payload };
    case INIT_CATEGORIES:
      return { categoryies: categoryInitialState };
    default:
      throw new Error('Unexpected action');
  }
};