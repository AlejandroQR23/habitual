import { categoryCards } from '../../utils/cards';
import { CardGridContainer } from '../../styles/card-grid.styles';
import CategoryCard from '../category-card/category-card.component';
import { CategoryCardGridContainer } from './category-card-grid.styles';

const CategoryCardGrid = () => {
  return (
    <CategoryCardGridContainer>
      <h2>Categories</h2>
      <CardGridContainer>
        {categoryCards.map((item, index) => (
          <CategoryCard key={index} text={item.text} color={item.color} img={item.img} />
        ))}
      </CardGridContainer>
    </CategoryCardGridContainer>
  );
};

export default CategoryCardGrid;
