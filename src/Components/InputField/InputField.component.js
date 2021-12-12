import * as React from 'react';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import TextField from '../TextField';
import styles from './InputField.styles';
import config from './InputField.config';

const InputField = (props) => {
  const getSelect = useSelector(({ themeReducer }) => themeReducer);
  const { theme } = getSelect;
  const {
    darkThemeColor, defaultThemeColor, style, text, setText, children, numberOfLines,
  } = props;

  return (
    <View style={style}>
      <TextField
        numberOfLines={numberOfLines}
        style={[styles.container(theme, darkThemeColor, defaultThemeColor)]}
        textStyle={styles.text}
      >
        {children}
      </TextField>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
  );
};

InputField.displayName = config.displayName;
InputField.defaultProps = config.defaultProps;

export default InputField;
