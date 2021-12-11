import {
  navigateToDetailScreen,
  apolloMapCreator,
  apolloObjectCreator,
} from './HomeScreen.utils';

const mockedProps = {
  name: 'Sport example',
  photo: 'some image',
  description: 'This is good sport',
};

it('should navigate to card detail screen', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const expectedRoute = 'Details';
  const expectedProps = {
    props: mockedProps,
  };

  navigateToDetailScreen(navigation, mockedProps)();
  expect(navigation.navigate).toHaveBeenCalledWith(
    expectedRoute,
    expectedProps,
  );
});

it('should generate mapper object with having queryId key', () => {
  const mapperApollo = apolloMapCreator();

  const expectedMapperApollo = new Map();
  expectedMapperApollo.set({
    queryId: 123,
  });

  expect(mapperApollo).toEqual(expectedMapperApollo);
});

it('should generate object with the defined length & its object content', () => {
  const apolloObject = apolloObjectCreator([mockedProps]);
  const expectedApolloObject = {
    length: 1,
    sports: [mockedProps],
  };

  expect(apolloObject).toEqual(expectedApolloObject);
});
