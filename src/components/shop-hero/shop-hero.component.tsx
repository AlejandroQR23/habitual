import { ReactComponent as ShopImage } from '../../assets/dancing.svg';
import { HeroContainer, HeroTextContainer } from '../../styles/hero.styles';

const ShopHero = () => (
  <HeroContainer>
    <ShopImage />
    <HeroTextContainer>
      <h1>Take a look at our categories</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis laoreet amet. Aliquet elementum
        ultrices molestie netus donec pellentesque quis. Aliquet elementum ultrices molestie netus donec pellentesque
        quis. Aliquet elementum ultrices molestie netus donec pellentesque quis.
      </p>
      <button>Improve your experience</button>
    </HeroTextContainer>
  </HeroContainer>
);

export default ShopHero;
