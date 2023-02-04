import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLACK} from '../../../common/colors';
import {strings} from '../../../common/localize';
import {normalize} from '../../../common/utils';

const EmptyListView = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{strings('empty_list_msg')}</Text>
    </View>
  );
};

export default EmptyListView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: normalize(20),
    color: BLACK,
  },
});
