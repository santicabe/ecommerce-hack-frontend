import produce from "immer";
const INITIAL_STATE = [];

const productReducer = produce((state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return (state = action.payload);
    default:
      return state;
  }
}, INITIAL_STATE);

export default productReducer;
