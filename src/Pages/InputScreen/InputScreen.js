import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { get } from 'lodash';

import { PostContact, EditContact, GetContact } from '../../Graphql/contact.graphql';
import InputField from '../../Components/InputField';
import TextField from '../../Components/TextField';
import Card from '../../Components/Card';

import styles from './InputField.styles';

export const queryOptions = (props) => ({
  fetchPolicy: 'network-only',
  notifyOnNetworkStatusChange: true,
  variables: {
    id: get(props, 'navigation.state.params.props.data', ''),
  }
});

export const mapPostMutationToProps = ({ mutate }) => ({
  postContact: (firstName, lastName, age, photo) =>
    mutate({ variables: { input: { firstName, lastName, age, photo } } })
});

export const mapEditMutationToProps = ({ mutate }) => ({
  editContact: (firstName, lastName, age, photo) =>
    mutate({ variables: { input: { firstName, lastName, age, photo } } })
});

const _mutateContact = (contact, isEdit) => {
  const {firstName, lastName, age, photo} = contact;

  if (isEdit) editContact(firstName, lastName, age, photo);
  else postContact(firstName, lastName, age, photo);
};

const InputScreen = (props) => {
  const { isEdit, data } = props.navigation.state.params;
  const { firstName, lastName, age, photo } = data;

  const [firstNameText, setFirstName] = React.useState(firstName);
  const [lastNameText, setLastName] = React.useState(lastName);
  const [ageText, setAge] = React.useState(age);
  const [photoText, setPhoto] = React.useState(photo);
  const [contact, setContact] = React.useState({});

  React.useEffect(() => {
    setContact({
      firstName,
      lastName,
      age,
      photo
    })
  }, [firstName, lastName, age, photo])

  return (
    <View style={styles.container}>
      <InputField setText={setFirstName}>
        {firstNameText}
      </InputField>
      <InputField setText={setLastName}>
        {lastNameText}
      </InputField>
      <InputField setText={setAge}>
        {ageText}
       </InputField>
       <InputField setText={setPhoto}>
        {photoText}
       </InputField>
       <Card style={styles.button} onPress={_mutateContact(contact, isEdit)}>
        <TextField textStyle={styles.buttonTitle}>
          {isEdit ? 'Upadate' : 'Save'}
        </TextField>
      </Card>
    </View>
  );
};

export default compose(
  graphql(GetContact, {
    options: queryOptions
  }),
  graphql(PostContact, {
    props: mapPostMutationToProps
  }),
  graphql(EditContact, {
    props: mapEditMutationToProps
  })
)(InputScreen);
