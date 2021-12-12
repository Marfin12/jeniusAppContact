const apolloObjectCreator = (getListContact) => ({
    length: getListContact.length,
    getListContact,
  });
  
const apolloMapCreator = () => {
    const queryStore = new Map();
    queryStore.set({
      queryId: 123,
    });
  
    return queryStore;
};

export { apolloObjectCreator, apolloMapCreator };