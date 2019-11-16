import { SET_COLORS, INIT_COLORS } from '../actions';

export const colorInitialState = [];

export const colorReducer = (state, action) => {
  switch (action.type) {
    case SET_COLORS:
      return { colors: action.payload };
    case INIT_COLORS:
      return { colors: colorInitialState };
    default:
      throw new Error('Unexpected action');
  }
};