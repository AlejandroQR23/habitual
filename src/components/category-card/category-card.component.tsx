import { ButtonContainer, ColorCardContainer, ColorCardImg } from '../../styles/color-card.styles';
import { ReactComponent as RightArrow } from '../../assets/chevron-right.svg';
import { IColorCard } from '../../utils/cards';
import product from '../../assets/bose-headset.png';

const CategoryCard = ({ text, color, img }: IColorCard) => (
  <div>
    <ColorCardContainer color={color}>
      <p>{text}</p>
      <ColorCardImg>
        <img src={product} alt={img} />
      </ColorCardImg>
      <ButtonContainer to="/">
        <RightArrow />
      </ButtonContainer>
    </ColorCardContainer>
  </div>
);

export default CategoryCard;
