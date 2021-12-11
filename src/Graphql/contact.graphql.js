import { gql } from 'apollo-boost';

const GetListContact = gql`
  query getContactById {
    contact {
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
    contact(id: $id) {
      firstName
      lastName
      age
      photo
      id
    }
  }
`;

const PostContact = gql`
  mutation postContact($input: ContactType!) {
    postContact(input: $input) {
      message
    }
  }
`;

const EditContact = gql`
  mutation editContact($input: ContactType!) {
    editContact(input: $input) {
      message
    }
  }
`;

const DeleteContact = gql`
  mutation deleteContact($input: ContactType!) {
    deleteContact(input: $input) {
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
