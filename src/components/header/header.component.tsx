import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { useAppSelector } from '../../redux/hooks';
import { CartDropdownContainer } from '../cart-dropdown/cart-dropdown.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => {
  const { hidden } = useAppSelector((state) => state.cart);
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/about">About</OptionLink>
        <OptionLink to="/signin">Sign In</OptionLink>
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdownContainer />}
    </HeaderContainer>
  );
};

export default Header;
