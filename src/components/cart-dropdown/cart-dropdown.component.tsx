import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </CartItemsContainer>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
