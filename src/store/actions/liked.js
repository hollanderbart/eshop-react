import * as Types from '../types';

export const likeProduct = product => (dispatch, getState) => {
  dispatch({ type: Types.LIKE_PRODUCT, payload: product });
};

export const unlikeProduct = product => (dispatch, getState) => {
  dispatch({
    type: Types.UNLIKE_PRODUCT,
    payload: product,
  });
};
