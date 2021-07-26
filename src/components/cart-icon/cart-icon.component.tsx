import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.reducer';
import { useAppDispatch } from '../../redux/hooks';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  return (
    <CartIconContainer
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingIcon />
      <ItemCount> 1 </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
