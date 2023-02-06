import {StyleSheet} from 'react-native';
import {BLACK, DISABLED_TEXT_COLOR, PRIMARY_COLOR, WHITE} from '../../colors';
import {isRTL} from '../../localize';
import {normalize} from '../../utils';

const styles = StyleSheet.create({
  dotsStyle: {
    width: 16,
    height: 16,
    tintColor: BLACK,
  },
  flex1: {
    flex: 1,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langText: {
    padding: normalize(8),
    fontSize: normalize(15),
    color: BLACK,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  langSelectedText: {
    padding: normalize(8),
    fontSize: normalize(15),
    color: DISABLED_TEXT_COLOR,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  menuContainer: {
    width: normalize(120),
    borderRadius: normalize(8),
  },
  labelText: {
    color: WHITE,
    fontSize: normalize(16),
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
  },
});

export default styles;
