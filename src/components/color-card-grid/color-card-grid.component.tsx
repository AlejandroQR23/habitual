import { colorCards } from '../../utils/cards';
import ColorCard from '../color-card/color-card.component';
import { ColorCardGridContainer } from './color-card-grid.styles';

const ColorCardGrid = () => {
  return (
    <ColorCardGridContainer>
      {colorCards.map((item, index) => (
        <ColorCard key={index} text={item.text} color={item.color} />
      ))}
    </ColorCardGridContainer>
  );
};

export default ColorCardGrid;
