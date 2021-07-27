import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import { selectCartItemsCount, toggleCartHidden } from '../../redux/cart/cart.reducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const itemsCount = useAppSelector(selectCartItemsCount);
  const dispatch = useAppDispatch();
  return (
    <CartIconContainer
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingIcon />
      <ItemCount> {itemsCount} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
