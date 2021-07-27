  
import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//increments the quantity of the item when user increases it on the checkout page
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

//decrements the quantity of the item when user reduces it on the checkout page 
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});


export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});