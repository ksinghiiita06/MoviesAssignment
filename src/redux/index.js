import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootReducer from './reducers';
import rootSaga from './saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  blacklist: [],
  whitelist: ['appReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export const getState = () => {
  return store.getState();
};

export const dispatchAction = action => {
  store.dispatch(action);
};

export default store;
