export const addToCart = (product) => {
  return {
    type: '@cart/ADD_PRODUCT',
    product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: '@cart/REMOVE_PRODUCT',
    id,
  };
};

export const updateAmount = (id, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
};
