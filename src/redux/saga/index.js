import {all, fork} from 'redux-saga/effects';
import {moviesFetcherSaga} from '../../screens/movies/movies.saga';

export default function* rootSaga() {
  yield all([fork(moviesFetcherSaga)]);
}
