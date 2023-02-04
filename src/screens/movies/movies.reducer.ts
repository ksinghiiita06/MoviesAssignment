import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from './movies.action';

export const initialState = {
  moviesResponse: null,
  fetching: false,
  error: null,
};

const moviesReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        moviesResponse: payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        fetching: false,
        moviesResponse: null,
        error: payload,
      };
    default:
      return state;
  }
};
export default moviesReducer;
