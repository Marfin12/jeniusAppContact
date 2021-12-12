import { renderItem } from './HomeScreen';
import { navigateToProfileScreen } from './HomeScreen.utils';

jest.mock('../../Components/TextField', () => 'TextField');
jest.mock('../../Components/Card', () => 'Card');

it('should navigate to card detail when card item pressed', () => {
  const mockedProps = {
    name: 'Sport example',
    photo: 'some image',
    description: 'This is good sport',
  };
  const navigation = {
    navigate: jest.fn(),
  };

  const cardItem = renderItem(mockedProps, navigation);
  cardItem.props.children[1].props.onPress();

  expect(navigation.navigate).toHaveBeenCalled();
});
