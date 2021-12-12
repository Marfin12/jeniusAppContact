import { gql } from 'apollo-boost';

const GetListContact = gql`
  query getListContact {
    getListContact {
      firstName
      lastName
      age
      photo
      id
    }
  }
`;

const GetContact = gql`
  query getContactById($id: String!) {
    getContactById(id: $id) {
      firstName
      lastName
      age
      photo
      id
    }
  }
`;

const PostContact = gql`
  mutation postContact($input: ContactInput!) {
    postContact(input: $input) {
      message
    }
  }
`;

const EditContact = gql`
  mutation editContact($input: ContactInput!) {
    editContact(input: $input) {
      message
    }
  }
`;

const DeleteContact = gql`
  mutation deleteContact($id: String) {
    deleteContact(id: $id) {
      message
    }
  }
`;

export {
  GetListContact,
  GetContact,
  PostContact,
  EditContact,
  DeleteContact
};
