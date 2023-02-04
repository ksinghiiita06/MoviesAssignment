import {combineReducers} from 'redux';
import appReducer from './appReducer';
import moviesReducer from '../../screens/movies/movies.reducer';

const reducers = combineReducers({
  appReducer,
  moviesReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
