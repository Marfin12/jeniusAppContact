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
    firstName: args.input.firstName,
    lastName: args.input.lastName,
    age: parseInt(args.input.age),
    photo: args.input.photo,
  }),
});

const editContact = async (args) => await fetch(encodeURI(`${BASE_URL}${CONTACT_PAGES.ID}${args.input.id}`), {
  method: 'PUT',
  body: JSON.stringify({
    firstName: args.input.firstName,
    lastName: args.input.lastName,
    age: parseInt(args.input.age),
    photo: args.input.photo,
  }),
});

const deleteContact = async (args) => {
  return await fetch(encodeURI(`${BASE_URL}${CONTACT_PAGES.ID}${args.id}`), {
  method: 'DELETE'
})};

module.exports = {
  fetchContactByAll,
  fetchContactById,
  postContact,
  editContact,
  deleteContact
};
