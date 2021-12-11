const fetch = require('node-fetch');

const { BASE_URL, CONTACT_PAGES } = require('../constants');

const fetchResponseByURL= async (relativeUrl, id = "") => {
  const res = await fetch(`${BASE_URL}${relativeUrl}${id}`);
  return res.json();
};

const fetchContactByAll = async () => {
  const res = await fetchResponseByURL(`${CONTACT_PAGES.ALL}`);
  return res.data;
};

const fetchContactById = async (args) => {
  const res = await fetchResponseByURL(`${CONTACT_PAGES.ID}`, args.id);
  return res.data;
};

const postContact = async (args) => await fetch(encodeURI(`${BASE_URL}${CONTACT_PAGES.ALL}`), {
  method: 'POST',
  body: JSON.stringify({
    firstName: args.firstName,
    lastName: args.lastName,
    age: args.age,
    photo: args.photo,
  }),
});

const editContact = async (args) => await fetch(encodeURI(`${BASE_URL}${CONTACT_PAGES.ID}${args.id}`), {
  method: 'PUT',
  body: JSON.stringify({
    firstName: args.firstName,
    lastName: args.lastName,
    age: args.age,
    photo: args.photo,
  }),
});

const deleteContact = async (args) => await fetch(encodeURI(`${BASE_URL}${CONTACT_PAGES.ID}${args.id}`), {
  method: 'DELETE'
});

module.exports = {
  fetchContactByAll,
  fetchContactById,
  postContact,
  editContact,
  deleteContact
};
