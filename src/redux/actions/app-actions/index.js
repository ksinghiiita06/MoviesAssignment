export const CHANGE_APP_LOCALE_EN = 'CHANGE_APP_LOCALE_EN';
export const CHANGE_APP_LOCALE_AR = 'CHANGE_APP_LOCALE_AR';
export const CHANGE_APP_STATE_LOGGED_IN = 'CHANGE_APP_STATE_LOGGED_IN';

export const changeAppLocaleToArabic = data => {
  return {
    type: CHANGE_APP_LOCALE_AR,
    payload: {data},
  };
};

export const changeAppLocaleToEnglish = data => {
  return {
    type: CHANGE_APP_LOCALE_EN,
    payload: {data},
  };
};
export const changeLoginStateAction = data => {
  return {
    type: CHANGE_APP_STATE_LOGGED_IN,
    payload: data,
  };
};
