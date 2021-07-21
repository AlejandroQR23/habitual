import { colorCards } from '../../utils/cards';
import ColorCard from '../color-card/color-card.component';
import { CardGridContainer } from '../../styles/card-grid.styles';

const ColorCardGrid = () => {
  return (
    <CardGridContainer>
      {colorCards.map((item, index) => (
        <ColorCard key={index} text={item.text} color={item.color} />
      ))}
    </CardGridContainer>
  );
};

export default ColorCardGrid;
