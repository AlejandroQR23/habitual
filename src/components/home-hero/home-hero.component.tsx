import { ReactComponent as HeroImage } from '../../assets/loving.svg';
import { HeroContainer, HeroTextContainer } from './home-hero.styles';

const HomeHero = () => (
  <HeroContainer>
    <HeroTextContainer>
      <h1>Find the stuff you love</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis laoreet amet. Aliquet elementum
        ultrices molestie netus donec pellentesque quis. Aliquet elementum ultrices molestie netus donec pellentesque
        quis. Aliquet elementum ultrices molestie netus donec pellentesque quis.
      </p>
      <button>Shop now</button>
    </HeroTextContainer>
    <HeroImage />
  </HeroContainer>
);

export default HomeHero;
