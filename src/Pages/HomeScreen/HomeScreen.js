import * as React from 'react';
import { View } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { GetListContact } from '../../Graphql/contact.graphql';
import Card from '../../Components/Card';
import FloatButton from '../../Components/FloatButton';
import ListView from '../../Components/ListView';
import TextField from '../../Components/TextField';
import Loading from '../../Components/Loading';
import HeaderList from '../../Components/HeaderList';

import styles from './HomeScreen.styles';
import { navigateToProfileScreen, navigateToInputScreen } from './HomeScreen.utils';

const _renderHeader = (text) => <HeaderList>{text}</HeaderList>;

const _renderItemContent = (firstName, lastName) => (
  <View style={styles.containerText}>
    <TextField textStyle={styles.title}>
      {`${firstName} ${lastName}`}
    </TextField>
  </View>
);

export const renderItem = (item, navigation) => {
  const { firstName, lastName } = item;

  return (
    <React.Fragment>
      {item.isFirstLetter && _renderHeader(item.firstName.charAt(0).toUpperCase())}
      <Card style={styles.item} onPress={navigateToProfileScreen(item, navigation)}>
        {_renderItemContent(firstName, lastName)}
      </Card>
    </React.Fragment>
  );
}

const _renderEmpty = () => (
  <TextField style={styles.emptyList} textStyle={styles.description}>
    The list data is empty
  </TextField>
);

const HomeScreen = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (props.data.getListContact || props.data.error) && setIsLoading(false)
  }, [props])

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      props.data.refetch();
    });
    
    return unsubscribe;
  }, [props.navigation]);

  return (
    <View>
      <Loading isVisible={isLoading} />
      <ListView
        style={styles.listView}
        item={props.data.getListContact}
        navigation={props.navigation}
        itemList={renderItem}
        emptyList={_renderEmpty}
        headerList={() => {}}
      />
      <FloatButton 
        style={styles.floatButton}
        onPress={navigateToInputScreen(props)}
        addButton={true}
      />
  </View>
  )
  };

  export default compose(
    graphql(GetListContact)
  )(HomeScreen);