const actions = {
  setProducts: (products) => {
    return {
      type: "ADD_PRODUCT",
      payload: products,
    };
  },
};
export default actions;
