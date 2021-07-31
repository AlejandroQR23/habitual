import CheckoutHero from '../../components/checkout-hero/checkout-hero.component';
import CheckoutItems from '../../components/checkout-items/checkout-items';
import EmptyCart from '../../components/empty-cart/empty-cart.component';
import { selectCartItems } from '../../redux/cart/cart.reducer';
import { useAppSelector } from '../../redux/hooks';
import { CheckoutContainer } from './checkout.styles';

const Checkout = () => {
  const items = useAppSelector(selectCartItems);
  return (
    <CheckoutContainer>
      <h1>My cart</h1>
      {items.length ? <CheckoutItems items={items} /> : <EmptyCart />}
      <CheckoutHero />
    </CheckoutContainer>
  );
};

export default Checkout;
