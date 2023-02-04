import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import {I18nManager, NativeModules} from 'react-native';
import RNRestart from 'react-native-restart';
import {getState, dispatchAction} from '../../redux/index';
import en from '../../locales/en.json';
import ar from '../../locales/ar.json';
import {
  changeAppLocaleToEnglish,
  changeAppLocaleToArabic,
} from '../../redux/actions/app-actions';
import {isIos} from '../utils';
import {ARABIC, ENGLISH} from '../constants';

export const ENGLISH_LANGUAGE = 'en';
export const ARABIC_LANGUAGE = 'ar';

export const languages = {
  en: {languageCode: 'en', isRTL: false, name: ENGLISH},
  ar: {languageCode: 'ar', isRTL: true, name: ARABIC},
};

const getDeviceLanguage = () => {
  const deviceLanguage = isIos()
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;
  if (typeof deviceLanguage === 'string') {
    const language = deviceLanguage.split('_');
    return language[0];
  }
  return '';
};

const translationGetters = {
  en: () => en,
  ar: () => ar,
};

const strings = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const isRTL = () => {
  return I18nManager.isRTL;
};

const configureLocale = () => {
  const deviceLanguage = getDeviceLanguage();

  let language = getState()?.appReducer?.languageCode;
  if (language === 'na') {
    if (deviceLanguage === ARABIC_LANGUAGE) {
      language = deviceLanguage;
    } else {
      language = ENGLISH_LANGUAGE;
    }
  }
  if (language === ARABIC_LANGUAGE) {
    dispatchAction(changeAppLocaleToArabic(languages[ARABIC_LANGUAGE]));
    setI18nConfig(ARABIC_LANGUAGE);
    readyToRestart(true, false);
  } else {
    dispatchAction(changeAppLocaleToEnglish(languages[ENGLISH_LANGUAGE]));
    setI18nConfig(ENGLISH_LANGUAGE);
    readyToRestart(false, false);
  }
};

const setRTLAnddRestart = (rtl, restart) => {
  I18nManager.forceRTL(rtl);
  I18nManager.allowRTL(rtl);

  setTimeout(() => {
    if (restart) {
      RNRestart.Restart();
    } else if (isIos() && rtl && !I18nManager.isRTL) {
      RNRestart.Restart();
    }
  }, 100);
};

const changeLocale = locale => {
  const language = getState()?.appReducer?.languageCode;
  if (language === locale) {
    return;
  }
  if (locale === ARABIC_LANGUAGE) {
    dispatchAction(changeAppLocaleToArabic(languages[ARABIC_LANGUAGE]));
    setI18nConfig(ARABIC_LANGUAGE);
    readyToRestart(true, true);
  } else {
    dispatchAction(changeAppLocaleToEnglish(languages[ENGLISH_LANGUAGE]));
    setI18nConfig(ENGLISH_LANGUAGE);
    readyToRestart(false, true);
  }
};

const readyToRestart = (rtl, restart) => {
  setTimeout(() => {
    // restart app
    setRTLAnddRestart(rtl, restart);
  }, 100);
};

const setI18nConfig = languageTag => {
  strings.cache.clear();
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export {configureLocale, isRTL, changeLocale, strings};
