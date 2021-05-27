const actions = {
  setProducts: (products) => {
    return {
      type: "ADD_PRODUCT",
      payload: products,
    };
  },
  add_quantity: (product) => {
    return {
      type: "ADD_QUANTITY",
      payload: product,
    };
  },
  add_1: (product) => {
    return {
      type: "ADD_1",
      payload: product,
    };
  },
  substract_1: (product) => {
    return {
      type: "SUBSTRACT_1",
      payload: product,
    };
  },
};
export default actions;
