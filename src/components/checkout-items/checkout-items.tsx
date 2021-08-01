import { useState } from 'react';
import { CheckoutItemsContainer, TotalContainer } from '../../pages/checkout/checkout.styles';
import { ICartItem, selectCartTotal } from '../../redux/cart/cart.reducer';
import { useAppSelector } from '../../redux/hooks';
import CheckoutItem from '../checkout-item/checkout-item';
import { Alert, CloseBtn } from './checkout-items.styles';

const CheckoutItems = ({ items }: { items: ICartItem[] }) => {
  const cartTotal = useAppSelector(selectCartTotal);
  const [paymentSuccesful, setPayment] = useState(false);

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
      <button onClick={() => setPayment(true)}>Get your items now!</button>
      {paymentSuccesful ? (
        <Alert>
          <CloseBtn onClick={() => setPayment(false)}>&times;</CloseBtn>
          <strong>Congrats!</strong> Your products are on their way
        </Alert>
      ) : (
        ''
      )}
    </div>
  );
};

export default CheckoutItems;
