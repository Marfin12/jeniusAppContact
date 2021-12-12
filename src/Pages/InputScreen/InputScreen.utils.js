import { Alert } from 'react-native';
import Constants from '../../Constants';

const _isSuccessResponse = (message) => message === "contact saved" || message === "Contact edited";

const _navigateToContactScreen = (isNavigation, navigation) => () => {
    if (isNavigation) {
        navigation.goBack();
    }
};

const _renderAlertDialog = (message, isNavigation, navigation) =>
  Alert.alert(
    _isSuccessResponse(message) ? "Success" : "Error",
    message,
    [
      { text: "OK", onPress: _navigateToContactScreen(isNavigation, navigation) }
    ]
  );

export const mutateContact = async (contact, isEdit, props) => {
    const {firstNameText, lastNameText, ageText, photoText, id, setIsLoading} = contact;
    setIsLoading(true);
    let message = "Oops!! something wrong!";
    let isNavigation = false;
    var result;
    try {
        if (isEdit) {
            result = await props.editContact(firstNameText, lastNameText, ageText, photoText, id);
            message = result.data.editContact.message;
        }
        else {
            result = await props.postContact(firstNameText, lastNameText, ageText, photoText);
            message = result.data.postContact.message;
        }
        setIsLoading(false);
        isNavigation = _isSuccessResponse(message);
    } catch(err) {
        setIsLoading(false);
        if (isEdit) {
            message = err.data.editContact.message;
        } else {
            message = err.data.postContact.message;
        }
    } finally {
        _renderAlertDialog(message, isNavigation, props.navigation);
    }
}
