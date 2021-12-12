import * as React from 'react';
import { Image } from 'react-native';
import Card from 'micro-card-marfin';

import { Images } from '../../Assets/Images';
import TextField from '../TextField';

import styles from './FloatButton.styles';
import config from './FloatButton.config';

const _renderAddButton = () => (
  <TextField textStyle={styles.iconPlus}>
    +
  </TextField>
);

const _renderDeleteButton = () =>
  <Image source={Images.delete_icon} style={styles.trashIcon} />

const FloatButton = (props) => (
  <Card style={[styles.floatButton, props.style]} onPress={props.onPress}>
    {props.addButton && _renderAddButton()}
    {props.deleteButton && _renderDeleteButton()}
  </Card>
);

FloatButton.displayName = config.displayName;
FloatButton.defaultProps = config.defaultProps;

export default FloatButton;
