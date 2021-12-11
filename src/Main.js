import * as React from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as themeActions from './Redux/Actions/action';
import Constants from './Constants';
import { HomeScreen, DetailsScreen, FavoriteScreen } from './Pages';

// import header image component

const Stack = createNativeStackNavigator();

const deleteContact = (props) => {
  props.delete(props.id);
}

const navigateToInputScreen = (props) => {
  props.navigate(props);
}

const StackScreen = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({ 
        title: route.params.props.name,
        headerRight: (
          <View>
            <HeaderImage onPress={deleteContact} />
            <HeaderImage onPress={navigateToInputScreen} />
          </View>
        )
      })}
    />
  </Stack.Navigator>
);

const Main = () => {
  const { DARK_THEME, LIGHT_THEME } = Constants.THEME;
  const colorScheme = useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;
  const globalTheme = colorScheme === DarkTheme ? DARK_THEME : LIGHT_THEME;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(themeActions.ToggleTheme(globalTheme));
  }, [colorScheme]);

  return (
    <NavigationContainer theme={colorScheme}>
      {StackScreen()}
    </NavigationContainer>
  );
};

export default Main;
