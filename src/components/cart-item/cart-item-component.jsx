import React from "react";

import {
  CartItemContainer,
  CartImage,
  ItemDetails,
  Name
} from "./cart-item-styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartImage src={imageUrl} alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
)

export default CartItem;
