import * as React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './HeaderImage.styles';
import config from './HeaderImage.config';

const HeaderImage = (props) => {
  const getSelect = useSelector(({ themeReducer }) => themeReducer);
  const { theme } = getSelect;

  return (
    <TouchableOpacity
      style={[styles.container(theme), props.style]}
      onPress={() => props.onPress()}
    >
      <Image source={ props.image } style={styles.image} />
    </TouchableOpacity>
  );
};

HeaderImage.displayName = config.displayName;
HeaderImage.defaultProps = config.defaultProps;

export default HeaderImage;
