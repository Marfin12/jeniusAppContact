const defaultItem = {
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
    id: ""
}

const defaultProps = {
    route: {
        params: {
            props: {
                item: defaultItem
            }
        }
    }
};
  
const displayName = 'InputScreen';
  
export default {
    defaultProps,
    defaultItem,
    displayName,
};