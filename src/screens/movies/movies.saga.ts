import {call, put, takeLatest} from 'redux-saga/effects';
import {format} from '../../common/utils';
import httpClient from '../../services/api';
import {getCompleteUrl, POPULAR_MOVIES} from '../../services/api/apiConstants';
import {
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
  FETCH_MOVIES_REQUEST,
} from './movies.action';

export function* onFetchMoviesRequest(action: object) {
  try {
    const response = yield call(fetchMovies, action.payload);
    yield put(fetchMoviesSuccessAction(response));
  } catch (err: any) {
    yield put(fetchMoviesFailureAction(err));
  }
}

export async function fetchMovies(reqPayload: any) {
  const {api_key, language, page} = reqPayload;
  const url = format(POPULAR_MOVIES, api_key, language, page);
  const completeUrl = getCompleteUrl(url);
  const response: any = await httpClient.get(completeUrl);
  return response.data;
}

// watcher
export function* moviesFetcherSaga() {
  yield takeLatest(FETCH_MOVIES_REQUEST, onFetchMoviesRequest);
}
