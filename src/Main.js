import * as React from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Images } from './Assets/Images';
import HeaderImage from './Components/HeaderImage';
import * as themeActions from './Redux/Actions/action';
import Constants from './Constants';
import { HomeScreen, InputScreen, ProfileScreen } from './Pages';

// import header image component

const Stack = createNativeStackNavigator();
const { 
  SCREEN: { CONTACT, PROFILE, EDIT }
} = Constants;

const navigateToInputScreen = (props) => () => {
  props.navigation.navigate(EDIT.ROUTE_NAME, {
    props,
    isEdit: true
  });
};

const StackScreen = () => (
  <Stack.Navigator initialRouteName={CONTACT.ROUTE_NAME}>
    <Stack.Screen 
      name={CONTACT.ROUTE_NAME} 
      component={HomeScreen} 
      options={() => ({
        title: CONTACT.TITLE
      })}
    />
    <Stack.Screen
      name={PROFILE.ROUTE_NAME}
      component={ProfileScreen}
      options={({ route }) => {
        const { props } = route.params;
        return ({ 
          title: PROFILE.TITLE,
          headerRight: (
            <View>
              <HeaderImage {...props} image={Images.delete_icon} onPress={props.deleteContact} />
              <HeaderImage {...props} image={Images.edit_icon} onPress={navigateToInputScreen} />
            </View>
          )
        })}}
    />
    <Stack.Screen
      name={EDIT.ROUTE_NAME}
      component={InputScreen}
      options={({ route }) => ({ 
        title: route.params.props.name
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
