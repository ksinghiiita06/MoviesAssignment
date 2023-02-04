import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../common/colors';
import {normalize} from '../../common/utils';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: normalize(8),
  },
  listItem: {
    flex: 1,
  },
  textStyle: {
    color: WHITE,
    marginTop: normalize(8),
  },
  cardStyle: {
    height: normalize(250),
    backgroundColor: BLACK,
    margin: normalize(8),
  },
  cardCoverStyle: {
    height: normalize(200),
  },
});

export default styles;
