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
      <OptionLink to="/shop">About</OptionLink>
      <OptionLink to="/shop">Sign In</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
