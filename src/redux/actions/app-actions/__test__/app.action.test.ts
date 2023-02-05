import {
  changeAppLocaleToArabic,
  changeAppLocaleToEnglish,
  changeLoginStateAction,
  CHANGE_APP_LOCALE_AR,
  CHANGE_APP_LOCALE_EN,
  CHANGE_APP_STATE_LOGGED_IN,
} from '..';

describe('App common actions', () => {
  it('changeAppLocaleToArabic returns correct payload', () => {
    expect(changeAppLocaleToArabic({})).toEqual({
      type: CHANGE_APP_LOCALE_AR,
      payload: {data: {}},
    });
  });
  it('changeAppLocaleToEnglish returns correct payload', () => {
    expect(changeAppLocaleToEnglish({})).toEqual({
      type: CHANGE_APP_LOCALE_EN,
      payload: {data: {}},
    });
  });
  it('changeAppStateLoggedInAction returns correct payload', () => {
    expect(changeLoginStateAction()).toEqual({
      type: CHANGE_APP_STATE_LOGGED_IN,
    });
  });
});
