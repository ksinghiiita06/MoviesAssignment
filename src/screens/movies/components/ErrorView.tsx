import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLACK} from '../../../common/colors';
import {strings} from '../../../common/localize';
import {normalize} from '../../../common/utils';

const ErrorView = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{strings('generic_error')}</Text>
    </View>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(20),
    color: BLACK,
    alignSelf: 'center',
  },
});
