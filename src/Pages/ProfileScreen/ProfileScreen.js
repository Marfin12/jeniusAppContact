import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { DeleteContact, GetContact } from '../../Graphql/contact.graphql';
import AvatarImage from '../../Components/AvatarImage';
import FloatButton from '../../Components/FloatButton';
import Loading from '../../Components/Loading';
import TextField from '../../Components/TextField';

import styles from './ProfileScreen.styles';
import { deleteContactById, emptyContact } from './ProfileScreen.utils';

const ProfileScreen = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [contact, setContact] = React.useState(emptyContact);
  const [firstNameText, setFirstName] = React.useState("");
  const [lastNameText, setLastName] = React.useState("");
  const [ageText, setAge] = React.useState("");
  const [photoText, setPhoto] = React.useState("");
  const [idText, setId] = React.useState("");

  React.useEffect(() => {
    const {firstName, lastName, age, photo, id} =
      props.data.getContactById ? props.data.getContactById : emptyContact; 
    setContact({
      firstName,
      lastName,
      age,
      photo,
      id
    })
    props.data.getContactById && setIsLoading(false);
  }, [props.data.getContactById]);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      props.data.refetch();
      const {firstName, lastName, age, photo, id} =
        props.data.getContactById ? props.data.getContactById : emptyContact;
      setContact({
        firstName,
        lastName,
        age,
        photo,
        id
      })
    });
    
    return unsubscribe;
  }, [props.navigation]);

  React.useEffect(() => {
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setAge(contact.age);
    setPhoto(contact.photo);
    setId(contact.id)
  }, [contact]);

  return (
    <View style={styles.container}>
      <Loading isVisible={isLoading} />
      <View style={styles.contentContainer}>
        <AvatarImage size={240} image={photoText} firstName={firstNameText} lastName={lastNameText} />
        <TextField style={styles.title} textStyle={styles.firstName}>
          {firstNameText}
        </TextField>
        <TextField style={styles.title} textStyle={styles.lastName}>
          {lastNameText}
        </TextField>
        <TextField style={styles.title} textStyle={styles.age}>
          {ageText}
        </TextField>
      </View>
      <FloatButton onPress={deleteContactById(idText, setIsLoading, props)} deleteButton />
    </View>
  );
};

export const queryOptions = (props: Props): QueryOpts => {
  return ({
  variables: {
    id: props.route.params.item.id
  }
})};

export const mapDeleteMutationToProps = ({ mutate }) => ({
  deleteContact: (id) =>
    mutate({ variables: { id }})
});

export default compose(
  graphql(DeleteContact, {
    props: mapDeleteMutationToProps
  }),
  graphql(GetContact, {
    options: queryOptions
  })
)(ProfileScreen);