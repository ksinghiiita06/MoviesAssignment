import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchMoviesAction,
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
  FETCH_MOVIES_REQUEST,
} from '../movies.action';
import {cloneableGenerator} from '@redux-saga/testing-utils';
import {
  fetchMovies,
  moviesFetcherSaga,
  onFetchMoviesRequest,
} from '../movies.saga';
import {failurePayload, successPayload} from './mock';
import httpClient from '../../../services/api';

describe('Movies saga', () => {
  test('moviesFetcherSaga()', () => {
    const generator = moviesFetcherSaga();
    expect(generator.next().value).toEqual(
      takeLatest(FETCH_MOVIES_REQUEST, onFetchMoviesRequest),
    );
  });
});
describe('moviesFetcherSaga', () => {
  let generator = cloneableGenerator(onFetchMoviesRequest)(
    fetchMoviesAction({}),
  );
  expect(generator.next().value).toEqual(call(fetchMovies, {}));
  test('Fetching of movies is successful', () => {
    const clone = generator.clone();
    expect(clone.next(successPayload).value).toEqual(
      put(fetchMoviesSuccessAction(successPayload)),
    );
  });
  test('Fetching of movies is unsuccessful', () => {
    const clone = generator.clone();
    expect(clone.throw(failurePayload).value).toEqual(
      put(fetchMoviesFailureAction(failurePayload)),
    );
  });
});

describe('testing async function fetchMovies', () => {
  httpClient.get = jest
    .fn()
    .mockImplementationOnce(async () => {
      return new Promise(resolve => {
        resolve({data: successPayload});
      });
    })
    .mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => {
        reject(failurePayload);
      });
    });
  it('should successfully get from server', async () => {
    const response = await fetchMovies({});
    expect(response).toEqual(successPayload);
  });
});
