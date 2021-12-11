const chai = require('chai');
const schema = require('.');

chai.should();
describe('Test Static Schema Snapshot', () => {
  it('schema should contain query types', () => {
    chai.assert.isNotNull(schema.getType('QueryType'));
  });

  it('schema should contain mutation types', () => {
    chai.assert.isNotNull(schema.getType('MutationType'));
  });
});

describe('Test Sport Resolver API', () => {
  const mockedSports = {
    idSport: 5,
    strSport: 'football',
    strSportDescription: 'description',
    strSportThumb: 'image',
  };
  const sportsSchema = schema._typeMap.Sports._fields;

  it('schema of SportType resolver should return correct id', () => {
    chai.assert.strictEqual(sportsSchema.id.resolve(mockedSports), 5);
  });

  it('schema of SportType resolver should return correct name', () => {
    chai.assert.strictEqual(sportsSchema.name.resolve(mockedSports), 'football');
  });

  it('schema of SportType resolver should return correct description', () => {
    chai.assert.strictEqual(sportsSchema.description.resolve(mockedSports), 'description');
  });

  it('schema of SportType resolver should return correct image', () => {
    chai.assert.strictEqual(sportsSchema.image.resolve(mockedSports), 'image');
  });
});

describe('Test Contact Resolver API', () => {
  const mockedMessage = {
    status: 200,
  };
  const contactSchema = schema._typeMap.Contact._fields;

  it('schema of ContactType resolver should return correct status', () => {
    chai.assert.strictEqual(contactSchema.message.resolve(mockedMessage), 200);
  });
});

describe('Test Mutation to Update The Contact', () => {
  const args = {
    firstName: 'a',
    lastName: 'n',
    age: 12,
    photo: 'p',
  };
  const contactSchema = schema._typeMap.Mutation._fields;

  it('schema of ContactType resolver should return correct status', async () => {
    chai.assert.hasAnyKeys(await contactSchema.contact.resolve(null, args), 'timeout');
  });
});
