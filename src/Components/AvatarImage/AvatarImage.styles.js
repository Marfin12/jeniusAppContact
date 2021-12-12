const styles = {
  textContainer: (size) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#f31222'
  }),
  text: (size) => ({
    color: '#ffffff',
    fontSize: size / 2,
    textAlign: 'center',
    letterSpacing: 0
  }),
  imageContainer: (size) => ({
    marginLeft: 8,
    height: size,
    width: size,
    borderRadius: size / 2,
    overflow: 'hidden'
  }),
  image: (size) => ({
    height: size,
    width: size,
    borderRadius: size / 2,
  }),
};

export default styles;
