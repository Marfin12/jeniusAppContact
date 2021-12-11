import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { GetListContact, DeleteContact } from '../../Graphql/contact.graphql';

import Card from '../../Components/Card';
import ListView from '../../Components/ListView';
import HeaderList from '../../Components/HeaderList';
import TextField from '../../Components/TextField';
// import button

import styles from './HomeScreen.styles';
import { navigateToProfileScreen, navigateToInputScreen } from './HomeScreen.utils';

export const queryOptions = () => ({
  fetchPolicy: 'network-only',
  notifyOnNetworkStatusChange: true,
  variables: {
    id: ""
  }
});

export const mapDeleteMutationToProps = ({ mutate }) => ({
  deleteContact: ({navigation: {state: {params: { id }}}}) =>
    mutate({ variables: { input: { id } } })
});

const _renderFloatButton = (props) => (
  <Card style={styles.floatButton} onPress={navigateToInputScreen(props)}>
    <TextField textStyle={styles.title}>
      +
    </TextField>
  </Card>
);

const _renderHeader = () => <HeaderList>List View Header</HeaderList>;

const _renderItemContent = (name) => (
  <View style={styles.containerText}>
    <TextField textStyle={styles.title}>
      {name}
    </TextField>
  </View>
);

export const renderItem = (props, navigation) => (
  <Card style={styles.item} onPress={navigateToProfileScreen(navigation, props)}>
    {_renderItemContent(props.name)}
  </Card>
);

const _renderEmpty = () => (
  <TextField style={styles.emptyList} textStyle={styles.description}>
    The list data is empty
  </TextField>
);

const HomeScreen = (props) => (
  <View>
    <ListView
      style={styles.listView}
      item={props.data}
      navigation={props.navigation}
      itemList={renderItem}
      emptyList={renderEmpty}
      headerList={renderHeader}
    />
    {_renderFloatButton(props)}
  </View>
);

export default compose(
  graphql(GetListContact, {
    options: queryOptions
  }),
  graphql(DeleteContact, {
    props: mapDeleteMutationToProps
  })
)(HomeScreen);
