import Constants from '../../Constants';

const defaultProps = {
  headerList: Constants.UTILS.EMPTY_FUNCTION,
  isFetchingFirst: true,
  emptyList: Constants.UTILS.EMPTY_FUNCTION,
  color: 'black',
  style: {},
};

const displayName = 'ListView';

export default {
  defaultProps,
  displayName,
};
