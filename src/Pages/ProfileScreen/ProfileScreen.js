import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { GetContact, DeleteContact } from '../../Graphql/contact.graphql';
import AvatarImage from '../../Components/AvatarImage';
import TextField from '../../Components/TextField';
import styles from './ProfileScreen.styles';

export const queryOptions = (props) => ({
  fetchPolicy: 'network-only',
  notifyOnNetworkStatusChange: true,
  variables: {
    id: get(props, 'navigation.state.params.id', ''),
  }
});

export const mapDeleteMutationToProps = ({ mutate }) => ({
  editContact: (id) =>
    mutate({ variables: { input: { id } } })
});

const DetailsScreen = (props) => {
  const data = props.route.params.props;
  const {firstName, lastName, age, photo} = data;

  return (
    <View style={styles.container}>
      <AvatarImage source={{ uri: photo }} firstName={firstName} lastName={lastName} />
      <TextField textStyle={styles.title}>
        {firstName}
      </TextField>
      <TextField textStyle={styles.title}>
        {lastName}
      </TextField>
      <TextField textStyle={styles.title}>
        {age}
       </TextField>
    </View>
  );
};

export default compose(
  graphql(GetContact, {
    options: queryOptions
  }),
  graphql(DeleteContact, {
    props: mapDeleteMutationToProps
  })
)(DetailsScreen);