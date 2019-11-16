import { SET_SIZES, INIT_SIZES } from '../actions';

export const sizeInitialState = [];

export const sizeReducer = (state, action) => {
  switch (action.type) {
    case SET_SIZES:
      return { size: action.payload };
    case INIT_SIZES:
      return { size: sizeInitialState };
    default:
      throw new Error('Unexpected action');
  }
};