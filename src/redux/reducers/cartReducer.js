import produce from "immer";

const INITIAL_STATE = [];

const cartReducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": //actions.products ?
      return [...state, action.payload];

    // state.push(action.payload)
    // break;

    case "ADD_QUANTITY": //actions.products ?
      const product = state.find((item) => item.name === action.payload.name);
      product.quantity += action.payload.quantity;
      break;

    case "ADD_1": //actions.products ?
      const product2 = state.find((item) => item.name === action.payload.name);
      product2.quantity += 1;
      break;

    case "SUBSTRACT_1": //actions.products ?
      const product3 = state.find((item) => item.name === action.payload.name);
      product3.quantity -= 1;
      break;

    case "CLEAR_PRODUCTS":
      return [];

    case "CLEAR_SINGLE_PRODUCT":
      return state.filter((product) => product.name !== action.payload.name);
    default:
      return state;
  }
}, INITIAL_STATE);

export default cartReducer;
