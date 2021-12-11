import * as React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './HeaderList.styles';
import config from './HeaderList.config';
import TextField from '../TextField';

const HeaderList = (props) => {
  const getSelect = useSelector(({ themeReducer }) => themeReducer);
  const { theme } = getSelect;
  const { style, children } = props;

  return (
    <View style={[styles.container(theme), style]}>
      <TextField
        textStyle={styles.text(theme)}
      >
        {children}
      </TextField>
    </View>
  );
};

HeaderList.displayName = config.displayName;
HeaderList.defaultProps = config.defaultProps;

export default HeaderList;
