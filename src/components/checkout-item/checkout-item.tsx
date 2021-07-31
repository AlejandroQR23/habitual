import { ReactComponent as RemoveItem } from '../../assets/remove.svg';
import { ReactComponent as AddItem } from '../../assets/add.svg';
import { ReactComponent as DeleteItem } from '../../assets/delete.svg';

import { addItem, clearItem, ICartItem, removeItem } from '../../redux/cart/cart.reducer';
import { CheckoutItemContainer, ControlsContainer, PriceContainer, ProductInfoContainer } from './checkout-item.styles';
import { useAppDispatch } from '../../redux/hooks';

const CheckoutItem = ({ item }: { item: ICartItem }) => {
  const dispatch = useAppDispatch();
  const { img, price, name, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ProductInfoContainer>
        <img src={img} alt="item" />
        <div>{name}</div>
      </ProductInfoContainer>
      <ControlsContainer>
        <RemoveItem onClick={() => dispatch(removeItem(item))} />
        <h6>x {quantity}</h6>
        <AddItem onClick={() => dispatch(addItem(item))} />
      </ControlsContainer>
      <PriceContainer>
        <h5>${price}</h5>
        <DeleteItem onClick={() => dispatch(clearItem(item))} />
      </PriceContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
