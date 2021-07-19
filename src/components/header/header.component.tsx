import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { HeaderContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <div>
      <Logo className="logo" />
    </div>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">About</OptionLink>
      <OptionLink to="/shop">Sign In</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
