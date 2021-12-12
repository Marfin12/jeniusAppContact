import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';
import Card from 'micro-card-marfin';

import { PostContact, EditContact } from '../../Graphql/contact.graphql';
import InputField from '../../Components/InputField';
import TextField from '../../Components/TextField';

import styles from './InputScreen.styles';
import config from './InputScreen.config';
import Loading from '../../Components/Loading';
import { mutateContact } from './InputScreen.utils';

const InputScreen = (props) => {
  const { isEdit, props: { item } } = props.route.params;
  const { firstName, lastName, age, photo, id } = item ? item : config.defaultItem;

  const [isLoading, setIsLoading] = React.useState(false);
  const [firstNameText, setFirstName] = React.useState(firstName);
  const [lastNameText, setLastName] = React.useState(lastName);
  const [ageText, setAge] = React.useState(age);
  const [photoText, setPhoto] = React.useState(photo);
  const [contact, setContact] = React.useState({});

  React.useEffect(() => {
    setContact({
      firstNameText,
      lastNameText,
      ageText,
      photoText,
      id,
      setIsLoading
    })
  }, [firstNameText, lastNameText, ageText, photoText, id])

  return (
    <View style={styles.container}>
      <Loading isVisible={isLoading} />
      <View style={styles.formInput}>
        <InputField style={styles.textTitle} text={firstNameText} setText={setFirstName}>
          First Name:
        </InputField>
        <InputField style={styles.textTitle} text={lastNameText} setText={setLastName}>
          Last Name:
        </InputField>
        <InputField style={styles.textTitle} text={ageText} setText={setAge}>
          Age:
        </InputField>
        <InputField style={styles.textTitle} text={photoText} setText={setPhoto}>
          Photo:
        </InputField>
        <Card style={styles.button} onPress={() => mutateContact(contact, isEdit, props)}>
          <TextField textStyle={styles.buttonTitle}>
            {isEdit ? 'Upadate' : 'Save'}
          </TextField>
        </Card>
      </View>
    </View>
  );
};

export const mapPostMutationToProps = ({ mutate }) => ({
  postContact: (firstName, lastName, age, photo) =>
    mutate({ variables: { input: { firstName, lastName, age, photo } } })
});

export const mapEditMutationToProps = ({ mutate }) => ({
  editContact: (firstName, lastName, age, photo, id) =>
    mutate({ variables: { input: { firstName, lastName, age, photo, id } } })
});

export default compose(
  graphql(PostContact, {
    props: mapPostMutationToProps
  }),
  graphql(EditContact, {
    props: mapEditMutationToProps
  })
)(InputScreen);
