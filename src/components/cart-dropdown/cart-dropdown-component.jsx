import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { withRouter } from 'react-router-dom';


import CartItem from '../cart-item/cart-item-component';

import { 
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
  DropDownButton} from './cart-dropdown-styles';

const CartDropDown = ({ cartItems, history ,dispatch }) => (
  <CartDropDownContainer>
      <CartItemsContainer >
        {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
      </CartItemsContainer>
      <DropDownButton onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}>CHECKOUT
        </DropDownButton>
  </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropDown))