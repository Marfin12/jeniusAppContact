import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './HeaderImage.styles';
import config from './HeaderImage.config';

const HeaderImage = (props) => {
  const getSelect = useSelector(({ themeReducer }) => themeReducer);
  const { theme } = getSelect;
  const { onPress, image } = props;

  return (
    <TouchableOpacity
      style={[styles.container(theme), style]}
      onPress={onPress(props)}
    >
      <Image source={ image } style={styles.image} />
    </TouchableOpacity>
  );
};

HeaderImage.displayName = config.displayName;
HeaderImage.defaultProps = config.defaultProps;

export default HeaderImage;
