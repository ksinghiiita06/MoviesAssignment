import {PERSIST_STATE} from '../../common/constants';
import {ARABIC_LANGUAGE, ENGLISH_LANGUAGE} from '../../common/localize';
import {
  CHANGE_APP_LOCALE_EN,
  CHANGE_APP_LOCALE_AR,
  CHANGE_APP_STATE_LOGGED_IN,
} from '../actions/app-actions';

export const initialState = {
  languageCode: 'na',
  isLoggedIn: false,
  defaultRTL: false,
};

const AppReducer = (state = initialState, action) => {
  const {type, payload = {}} = action;
  switch (type) {
    case CHANGE_APP_LOCALE_EN:
      return {
        ...state,
        languageCode: ENGLISH_LANGUAGE,
        defaultRTL: false,
        ...payload.data,
      };
    case CHANGE_APP_LOCALE_AR:
      return {
        ...state,
        languageCode: ARABIC_LANGUAGE,
        defaultRTL: false,
        ...payload.data,
      };

    case PERSIST_STATE:
      // handling the initial conditions when no persisted data
      const {appReducer = {}} = payload;
      const {languageCode = 'na', isLoggedIn = false} = appReducer;
      return {
        ...state,
        languageCode,
        isLoggedIn,
      };
    case CHANGE_APP_STATE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default AppReducer;
