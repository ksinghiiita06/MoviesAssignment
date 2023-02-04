export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesAction = (payload: object) => {
  return {type: FETCH_MOVIES_REQUEST, payload};
};
export const fetchMoviesSuccessAction = (payload: object) => {
  return {type: FETCH_MOVIES_SUCCESS, payload};
};
export const fetchMoviesFailureAction = (payload: object) => {
  return {type: FETCH_MOVIES_FAILURE, payload};
};
