import { Link } from 'react-router-dom';
import { ReactComponent as GrayLogo } from '../../assets/LogoGray.svg';
import { CopyrigthContainer, FooterContainer } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <GrayLogo className="logo" />
    </Link>
    <CopyrigthContainer>
      <p>
        &copy; Copyrigth Habitual | Developed by{' '}
        <a href="https://github.com/AlejandroQR23" target="_blank">
          Alejandro QR
        </a>
      </p>
    </CopyrigthContainer>
  </FooterContainer>
);

export default Footer;
