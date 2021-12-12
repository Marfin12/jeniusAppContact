import * as React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';

import styles from './AvatarImage.styles';
import config from './AvatarImage.config';
import { getNameInitial, checkImageURL } from './AvatarImage.utils';

const _renderImage = (image, size) => (
  <TouchableHighlight style={styles.imageContainer(size)}>
    <Image 
      source={{ uri: image }}
      style={styles.image(size)}
    />
  </TouchableHighlight>
);

const _renderLetter = (text, size) => (
  <View style={styles.textContainer(size)}>
    <Text style={styles.text(size)}>
      {getNameInitial(text)}
    </Text>
  </View>
);

const AvatarImage = (props) => {
  const { firstName, lastName, image, size } = props;
  const text = firstName + " " + lastName;
  const [validImage, setValidImage] = React.useState(image);

  React.useEffect(() => {
    checkImageURL(image, setValidImage);
  }, [props])

  if (validImage === 'N/A') {
    return _renderLetter(text, size);
  }

  return _renderImage(image, size);

}

AvatarImage.displayName = config.displayName;
AvatarImage.defaultProps = config.defaultProps;

export default AvatarImage;
