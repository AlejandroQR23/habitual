import { ReactComponent as ConstructionImage } from '../../assets/messy.svg';
import { CategoryHeroContainer, HeroTextContainer } from '../../styles/hero.styles';

import { ConstructionContainer } from './construction.styles';

const Construction = () => (
  <ConstructionContainer>
    <CategoryHeroContainer>
      <HeroTextContainer>
        <h2>Oh, boy, this page is still under construccion rigth now! :(</h2>
      </HeroTextContainer>
      <ConstructionImage />
    </CategoryHeroContainer>
  </ConstructionContainer>
);

export default Construction;
