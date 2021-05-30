const actions = {
  setUser: (user) => {
    return {
      type: "SET_USER",
      payload: user,
    };
  },
  clearUser: () => {
    return {
      type: "CLEAR_USER",
    };
  },
};
export default actions;
