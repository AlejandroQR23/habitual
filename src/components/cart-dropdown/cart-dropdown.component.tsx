import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.reducer';
import { useAppDispatch } from '../../redux/hooks';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({ history }: RouteComponentProps) => {
  const dispatch = useAppDispatch();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </CartItemsContainer>
      <button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </button>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
