export const addToCartRequest = (id) => {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
};

export const addToCartSuccess = (product) => {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: '@cart/REMOVE_PRODUCT',
    id,
  };
};

export const updateAmountRequest = (id, amount) => {
  return {
    type: '@cart/UPDATE_REQUEST',
    id,
    amount,
  };
};

export const updateAmountSuccess = (id, amount) => {
  return {
    type: '@cart/UPDATE_SUCCESS',
    id,
    amount,
  };
};

