import * as React from 'react';
import { View, FlatList } from 'react-native';

import styles from './ListView.styles';
import config from './ListView.config';

const _sortItemAscending = (items) => {
  if (items.length <= 0) return [];
  let data = []
  let tempStr = "";

  items.sort((a, b) => {
    var textA = a.firstName.toUpperCase();
    var textB = b.firstName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }).forEach(item => {
    var isFirstLetter = false;
    if (tempStr.toUpperCase() !== item.firstName.charAt(0).toUpperCase()) {
      tempStr = item.firstName.charAt(0);
      isFirstLetter = true;
    }

    data.push({
      ...item,
      isFirstLetter
    })
  })

  return data;
}

const ListView = (props) => (
  <View style={[styles.container, props.style]}>
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={props.item && _sortItemAscending(props.item)}
      renderItem={({ item }) => props.itemList(item, props.navigation, props.deleteContact)}
      ListEmptyComponent={props.emptyList()}
      ListHeaderComponent={props.headerList()}
    />
  </View>
);

ListView.displayName = config.displayName;
ListView.defaultProps = config.defaultProps;

export default ListView;
