import { RouteComponentProps, withRouter } from 'react-router-dom';
import { selectCartItems, toggleCartHidden } from '../../redux/cart/cart.reducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({ history }: RouteComponentProps) => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
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
