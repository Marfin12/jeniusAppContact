const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType
} = require('graphql');

const {
  postContact,
  editContact,
  deleteContact,
  fetchContactById,
  fetchContactByAll
} = require('../services');

const ContactInputType = new GraphQLInputObjectType({
  name: 'ContactInput',
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLString },
    photo: { type: GraphQLString},
    id: { type: GraphQLString },
  }),
});

const ContactType = new GraphQLObjectType({
  name: 'Contact',
  description: 'Somebody that you used to know',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: (data) => data.firstName,
    },
    lastName: {
      type: GraphQLString,
      resolve: (data) => data.lastName,
    },
    age: {
      type: GraphQLString,
      resolve: (data) => data.age,
    },
    photo: {
      type: GraphQLString,
      resolve: (data) => data.photo,
    },
    id: {
      type: GraphQLString,
      resolve: (data) => data.id,
    },
  }),
});

const ResponseType = new GraphQLObjectType({
  name: 'Response',
  description: 'Somebody that you used to know',
  fields: () => ({
    message: {
      type: GraphQLString,
      async resolve(response) {
        const res = await response.json();
        return res.message;
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'ContactQuery',
  description: 'The root of all... queries',
  fields: () => ({
    getListContact: {
      type: new GraphQLList(ContactType),
      resolve(parent, args) {
        return fetchContactByAll()
      },
    },
    getContactById: {
      type: ContactType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return fetchContactById(args)
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'PostMutation',
  description: 'The root of all... mutation',
  fields: {
    postContact: {
      type: ResponseType,
      args: {
        input: { type: ContactInputType }
      },
      resolve(parent, args) {
        return postContact(args);
      },
    },
    editContact: {
      type: ResponseType,
      args: {
        input: { type: ContactInputType }
      },
      resolve(parent, args) {
        return editContact(args);
      },
    },
    deleteContact: {
      type: ResponseType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return deleteContact(args);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
