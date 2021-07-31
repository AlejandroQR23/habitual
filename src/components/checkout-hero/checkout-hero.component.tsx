import { CategoryHeroContainer, HeroTextContainer } from '../../styles/hero.styles';
import { ReactComponent as CheckoutImage } from '../../assets/checkout-doodle.svg';

const CheckoutHero = () => (
  <CategoryHeroContainer>
    <CheckoutImage />
    <HeroTextContainer>
      <h3>We hope you’ve found what you were lookink for!</h3>
    </HeroTextContainer>
  </CategoryHeroContainer>
);

export default CheckoutHero;
