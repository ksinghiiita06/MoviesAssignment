import {ARABIC_LANGUAGE, ENGLISH_LANGUAGE} from '../../../common/localize';
import {
  changeAppLocaleToArabic,
  changeAppLocaleToEnglish,
  changeLoginStateAction,
} from '../../../redux/actions/app-actions';
import AppReducer, {initialState} from '../appReducer';

describe('appReducer', () => {
  it('should return the initial state', () => {
    expect(AppReducer(undefined, {type: ''})).toEqual(initialState);
  });
  it('should handle CHANGE_APP_LOCALE_AR', () => {
    expect(AppReducer(initialState, changeAppLocaleToArabic({}))).toEqual({
      ...initialState,
      languageCode: ARABIC_LANGUAGE,
      defaultRTL: false,
    });
  });
  it('should handle CHANGE_APP_LOCALE_EN', () => {
    expect(AppReducer(initialState, changeAppLocaleToEnglish({}))).toEqual({
      ...initialState,
      languageCode: ENGLISH_LANGUAGE,
      defaultRTL: false,
    });
  });
  it('should handle CHANGE_APP_STATE_LOGGED_IN', () => {
    expect(AppReducer(initialState, changeLoginStateAction(true))).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });
});
