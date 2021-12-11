import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './Card.styles';
import config from './Card.config';

const Card = (props) => {
  const getSelect = useSelector(({ themeReducer }) => themeReducer);
  const { theme } = getSelect;

  return (
    <TouchableOpacity
      style={[styles.container(theme), props.style]}
      onPress={() => props.onPress()}
    >
      {props.children}
    </TouchableOpacity>
  );
};

Card.displayName = config.displayName;
Card.defaultProps = config.defaultProps;

export default Card;
