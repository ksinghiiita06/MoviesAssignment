import {Platform} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const screenWidth = SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;

const scale = screenWidth / 375;
/**
 * Function use to check if platform is iOS
 * @returns boolean
 */
export const isIos = () => Platform.OS === 'ios';
/**
 * Function use to normalize pixel value
 * @param size number
 * @returns number
 */
export const normalize = size => {
  const newSize = size * scale;
  const roundedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return roundedSize;
};

/**
 * Function use to validate password
 * @param password string
 * @returns boolean
 */
export const isValidPassword = password => {
  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/;
  return regExp.test(password);
};
/**
 * Function use to validate email
 * @param email string
 * @returns string
 */
export const isValidEmail = email => {
  const regExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
};

/**
 * Function use to replace dynamic values in strings
 * @param str string
 * @param args arguments array to be replace
 * @returns string
 */
export const format = (str, ...args) => {
  args.forEach((arg, i) => {
    str = str.replace(`{${i}}`, arg);
  });
  return str;
};
