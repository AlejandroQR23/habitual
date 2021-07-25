import { ButtonContainer, ColorCardContainer, ColorCardImg } from '../../styles/color-card.styles';
import { ReactComponent as RightArrow } from '../../assets/chevron-right.svg';
import product from '../../assets/bose-headset.png';
import { ICategory } from '../../redux/directory/directory.reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ICategoryCard extends ICategory, RouteComponentProps {}

const CategoryCard = ({ title, color, img, linkUrl, history, match }: ICategoryCard) => (
  <div>
    <ColorCardContainer color={color}>
      <p>{title}</p>
      <ColorCardImg>
        <img src={product} alt={img} />
      </ColorCardImg>
      <ButtonContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <RightArrow />
      </ButtonContainer>
    </ColorCardContainer>
  </div>
);

export default withRouter(CategoryCard);
