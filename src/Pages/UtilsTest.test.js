import {
  apolloMapCreator,
  apolloObjectCreator,
} from './UtilsTest';

const mockedProps = {
  name: 'Sport example',
  photo: 'some image',
  description: 'This is good sport',
};

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
    getListContact: [mockedProps],
  };

  expect(apolloObject).toEqual(expectedApolloObject);
});