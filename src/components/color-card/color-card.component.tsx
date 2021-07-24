import { ButtonContainer, ColorCardContainer } from '../../styles/color-card.styles';
import { ReactComponent as RightArrow } from '../../assets/chevron-right.svg';
import { IColorCard } from '../../utils/cards';

const ColorCard = ({ text, color }: IColorCard) => (
  <ColorCardContainer color={color}>
    <p>{text}</p>
    <ButtonContainer to="/shop">
      <RightArrow />
    </ButtonContainer>
  </ColorCardContainer>
);

export default ColorCard;
