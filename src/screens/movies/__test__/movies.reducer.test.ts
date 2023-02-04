import {
  fetchMoviesAction,
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
} from '../movies.action';
import moviesReducer, {initialState} from '../movies.reducer';
import {failurePayload, successPayload} from './mock';

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {type: ''})).toEqual(initialState);
  });
  it('should handle FETCH_MOVIES_REQUEST', () => {
    expect(moviesReducer(initialState, fetchMoviesAction({}))).toEqual({
      ...initialState,
      fetching: true,
    });
  });
  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(
      moviesReducer(initialState, fetchMoviesSuccessAction(successPayload)),
    ).toEqual({
      ...initialState,
      moviesResponse: successPayload,
    });
  });
  it('should handle FETCH_MOVIES_FAILURE', () => {
    expect(
      moviesReducer(initialState, fetchMoviesFailureAction(failurePayload)),
    ).toEqual({
      ...initialState,
      error: failurePayload,
    });
  });
});
