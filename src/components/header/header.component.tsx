import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { HeaderContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/about">About</OptionLink>
      <OptionLink to="/signin">Sign In</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
