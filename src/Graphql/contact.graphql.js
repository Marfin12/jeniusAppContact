import { gql } from 'apollo-boost';

const GetContact = gql`
  query contact($id: String!) {
    contact {
      firstName
      lastName
      age
      photo
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
  GetContact,
  PostContact,
  EditContact,
  DeleteContact
};
