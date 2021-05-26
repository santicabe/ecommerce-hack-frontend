import produce from "immer";
const INITIAL_STATE = [];

const cartReducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": //actions.products ?
      console.log(state);
      return [...state, action.payload];
    case "CLEAR_PRODUCTS":
      return []; //es la mejor practica???
    default:
      return state;
  }
}, INITIAL_STATE);

export default cartReducer;
