import {
  fetchMoviesAction,
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from '../movies.action';
import {failurePayload, successPayload} from './mock';

describe('MoviesScreen actions', () => {
  it('fetchMoviesAction returns correct payload', () => {
    expect(fetchMoviesAction({})).toEqual({
      type: FETCH_MOVIES_REQUEST,
      payload: {},
    });
  });
  it('fetchMoviesSuccessAction returns correct payload', () => {
    expect(fetchMoviesSuccessAction(successPayload)).toEqual({
      type: FETCH_MOVIES_SUCCESS,
      payload: successPayload,
    });
  });
  it('fetchMoviesSuccessAction returns correct payload', () => {
    expect(fetchMoviesFailureAction(failurePayload)).toEqual({
      type: FETCH_MOVIES_FAILURE,
      payload: failurePayload,
    });
  });
});
