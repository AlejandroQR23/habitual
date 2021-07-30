import { ICartItem } from '../../redux/cart/cart.reducer';
import { CartItemContainer, ItemNameContainer } from './cart-item.styles';

const CartItem = ({ item: { img, price, name, quantity } }: { item: ICartItem }) => (
  <CartItemContainer>
    <img src={img} alt="item" />
    <ItemNameContainer>{name}</ItemNameContainer>
    <h6>x {quantity}</h6>
    <h5>${price}</h5>
  </CartItemContainer>
);

export default CartItem;
