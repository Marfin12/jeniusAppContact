import * as React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './Loading.styles';
import config from './Loading.config';

const Loading = (props) => (
  <Modal transparent={true} animationType={'none'} visible={props.isVisible}>
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000"/>
    </View>
  </Modal>
);

Loading.displayName = config.displayName;
Loading.defaultProps = config.defaultProps;

export default Loading;
