import { ButtonContainer, ColorCardContainer } from '../../styles/color-card.styles';
import { ReactComponent as RightArrow } from '../../assets/chevron-right.svg';
import { IColorCard } from '../../utils/cards';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IColorCardProps extends IColorCard, RouteComponentProps {}
const ColorCard = ({ text, color, history }: IColorCardProps) => (
  <ColorCardContainer color={color}>
    <p>{text}</p>
    <ButtonContainer onClick={() => history.push('/shop')}>
      <RightArrow />
    </ButtonContainer>
  </ColorCardContainer>
);

export default withRouter(ColorCard);
