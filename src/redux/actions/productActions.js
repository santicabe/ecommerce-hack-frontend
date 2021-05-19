const actions = {
  setProducts: (products) => {
    return {
      type: "SET_PRODUCTS",
      payload: products,
    };
  },
};
export default actions;
