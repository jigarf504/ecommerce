const reducer = (user = [],action) => {
    switch (action.type) {
      case "SET_USER":
        return action.payload;
      case "FETCH_USER":
        return user;
      default:
        return user;
    }
}
export default reducer