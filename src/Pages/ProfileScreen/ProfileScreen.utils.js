import { Alert } from 'react-native';

export const emptyContact = {
    firstName: "",
    lastName: "",
    age: "",
    id: "",
    photo: ""
};

const _isSuccessResponse = (message) => message === "contact deleted";

const _navigateToContactScreen = (isNavigation, navigation) => () => {
    if (isNavigation) navigation.goBack();
};

const _renderAlertDialog = (message, isNavigation, navigation) =>
  Alert.alert(
    _isSuccessResponse(message) ? "Success" : "Error",
    message,
    [
      { text: "OK", onPress: _navigateToContactScreen(isNavigation, navigation) }
    ]
  );

export const deleteContactById = (id, setIsLoading, props) => async () => {
  var message = "Something wrong occurs!!";
  var isNavigation = false;
  setIsLoading(true)
  try {
    const result = await props.deleteContact(id);
    setIsLoading(false);
    message = result.data.deleteContact.message;
    isNavigation = _isSuccessResponse(message);
  } catch (err) {
    setIsLoading(false);
    message = err.data.deleteContact.message
  } finally {
    _renderAlertDialog(message, isNavigation, props.navigation);
  }
};