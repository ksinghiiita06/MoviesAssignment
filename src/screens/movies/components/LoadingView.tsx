import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLACK} from '../../../common/colors';
import {strings} from '../../../common/localize';
import {normalize} from '../../../common/utils';

const LoadingView = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{strings('loading')}</Text>
    </View>
  );
};

export default LoadingView;

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
