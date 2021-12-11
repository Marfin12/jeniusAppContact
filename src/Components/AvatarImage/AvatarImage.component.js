import * as React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import styles from './AvatarImage.styles';
import config from './AvatarImage.config';

const _renderImage = (image) => (
  <TouchableHighlight style={styles.imageContainer}>
    <Image 
      source={image}
      style={styles.image}
    />
  </TouchableHighlight>
);

const _renderLetter = (text) => (
  <View style={styles.container}>
    <Text style={styles.text} {...platform.getAccessibilityLabel('Avatar')}>
      {string.getNameInitial(text)}
    </Text>
  </View>
);

const AvatarImage = (props) => {
  const { firstName, lastName, image } = props;
  const text = firstName + lastName;

  if (image === 'N/A') {
    return _renderLetter(text);
  }

  return _renderImage(image);
}

AvatarImage.displayName = config.displayName;
AvatarImage.defaultProps = config.defaultProps;

export default AvatarImage;
