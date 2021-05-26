const actions = {
  setProducts: (products) => {
    return {
      type: "ADD_PRODUCT",
      payload: products,
    };
  },
  addQuantity: (product) => {
    return {
      type: "ADD_QUANTITY",
      payload: product,
    };
  },
};
export default actions;
