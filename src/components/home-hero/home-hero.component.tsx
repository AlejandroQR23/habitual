import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ReactComponent as HeroImage } from '../../assets/loving.svg';
import { HeroContainer, HeroTextContainer } from '../../styles/hero.styles';

const HomeHero = ({ history }: RouteComponentProps) => (
  <HeroContainer>
    <HeroTextContainer>
      <h1>Find the stuff you love</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis laoreet amet. Aliquet elementum
        ultrices molestie netus donec pellentesque quis. Aliquet elementum ultrices molestie netus donec pellentesque
        quis. Aliquet elementum ultrices molestie netus donec pellentesque quis.
      </p>
      <button onClick={() => history.push('/shop')}>Shop now</button>
    </HeroTextContainer>
    <HeroImage />
  </HeroContainer>
);

export default withRouter(HomeHero);
