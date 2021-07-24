import { categoryCards } from '../../utils/cards';
import { CardGridContainer } from '../../styles/card-grid.styles';
import CategoryCard from '../category-card/category-card.component';
import { SectionContainer } from '../../styles/section-container.styles';

const CategoryCardGrid = () => (
  <SectionContainer>
    <h2>Categories</h2>
    <CardGridContainer>
      {categoryCards.map((item, index) => (
        <CategoryCard key={index} text={item.text} color={item.color} img={item.img} />
      ))}
    </CardGridContainer>
  </SectionContainer>
);

export default CategoryCardGrid;
