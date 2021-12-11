import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { PostContact, EditContact } from '../../Graphql/contact.graphql';
import InputField from '../../Components/InputField';
import TextField from '../../Components/TextField';
import Card from '../../Components/Card';

import styles from './InputField.styles';

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
  const data = props.route.params.props;
  const [firstName, setFirstName] = React.useState(data.firstName);
  const [lastName, setLastName] = React.useState(data.lastName);
  const [age, setAge] = React.useState(data.age);
  const [photo, setPhoto] = React.useState(data.photo);
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
        {firstName}
      </InputField>
      <InputField setText={setLastName}>
        {lastName}
      </InputField>
      <InputField setText={setAge}>
        {age}
       </InputField>
       <InputField setText={setPhoto}>
        {photo}
       </InputField>
       <Card style={styles.button} onPress={_mutateContact(contact, data.isEdit)}>
        <TextField textStyle={styles.buttonTitle}>
          {data.isEdit ? 'Upadate' : 'Post'}
        </TextField>
      </Card>
    </View>
  );
};

export default compose(
  graphql(PostContact, {
    props: mapPostMutationToProps
  }),
  graphql(EditContact, {
    props: mapEditMutationToProps
  })
)(InputScreen);
