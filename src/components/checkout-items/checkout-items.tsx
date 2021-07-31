import { CheckoutItemsContainer, TotalContainer } from '../../pages/checkout/checkout.styles';
import { ICartItem, selectCartTotal } from '../../redux/cart/cart.reducer';
import { useAppSelector } from '../../redux/hooks';
import CheckoutItem from '../checkout-item/checkout-item';

const CheckoutItems = ({ items }: { items: ICartItem[] }) => {
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div>
      <CheckoutItemsContainer>
        {items.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </CheckoutItemsContainer>
      <TotalContainer>
        <h5>Total: {cartTotal}</h5>
      </TotalContainer>
      <button>Get your items now!</button>
    </div>
  );
};

export default CheckoutItems;
