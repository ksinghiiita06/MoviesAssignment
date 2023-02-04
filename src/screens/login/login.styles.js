import {StyleSheet} from 'react-native';
import {isRTL} from '../../common/localize';
import {normalize} from '../../common/utils';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: normalize(16),
    paddingTop: normalize(64),
  },
  mt16: {
    marginTop: normalize(16),
  },
});

export default styles;
