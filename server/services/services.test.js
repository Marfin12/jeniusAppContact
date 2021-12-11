const { expect } = require('chai');

const { fetchAllSports, updateContact } = require('.');

describe('Get all sports', () => {
  it('should return approriate sports object', async () => {
    const allSports = await fetchAllSports();

    expect(allSports).to.be.a('array');
    expect(allSports.length).greaterThanOrEqual(1);
    expect(allSports[0].hasOwnProperty('idSport')).equal(true);
    expect(allSports[0].hasOwnProperty('strSport')).equal(true);
    expect(allSports[0].hasOwnProperty('strFormat')).equal(true);
    expect(allSports[0].hasOwnProperty('strSportThumb')).equal(true);
    expect(allSports[0].hasOwnProperty('strSportDescription')).equal(true);
  });
});

describe('Update contact', () => {
  it('should return asynchronous request that targeting'
    + ' herokuapp api & has status property', async () => {
    const mockedArgs = {
      firstName: 'Marfin',
      lastName: 'Fadhilah',
      age: '12',
      photo: '',
    };

    const res = await updateContact(mockedArgs);
    const json = res[Object.getOwnPropertySymbols(res)[1]];

    expect(json.hasOwnProperty('status')).equal(true);
    expect(json.hasOwnProperty('url')).equal(true);
    expect(json.url).equal('https://simple-contact-crud.herokuapp.com/contact');
  });
});
