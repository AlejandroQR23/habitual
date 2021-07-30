import { ReactComponent as CategoryImage } from '../../assets/category-doodle.svg';
import { CategoryHeroContainer, HeroTextContainer } from '../../styles/hero.styles';

const CategoryHero = () => (
  <CategoryHeroContainer>
    <CategoryImage />
    <HeroTextContainer>
      <h3>Are you in a shopping hurry? Don’t worry, we got you covered</h3>
    </HeroTextContainer>
  </CategoryHeroContainer>
);

export default CategoryHero;
