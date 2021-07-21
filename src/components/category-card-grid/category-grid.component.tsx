import { categoryCards } from '../../utils/cards';
import { CardGridContainer } from '../../styles/card-grid.styles';
import CategoryCard from '../category-card/category-card.component';

const CategoryCardGrid = () => {
  return (
    <CardGridContainer>
      {categoryCards.map((item, index) => (
        <CategoryCard key={index} text={item.text} color={item.color} img={item.img} />
      ))}
    </CardGridContainer>
  );
};

export default CategoryCardGrid;
