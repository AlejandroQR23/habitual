import { CardGridContainer } from '../../styles/card-grid.styles';
import CategoryCard from '../category-card/category-card.component';
import { SectionContainer } from '../../styles/section-container.styles';
import { useAppSelector } from '../../redux/hooks';
import { selectCategories } from '../../redux/directory/directory.reducer';

const CategoryCardGrid = () => {
  const categories = useAppSelector(selectCategories);
  return (
    <SectionContainer>
      <h2>Categories</h2>
      <CardGridContainer>
        {categories.map(({ id, ...otherSectionProps }) => (
          <CategoryCard key={id} id={id} {...otherSectionProps} />
        ))}
      </CardGridContainer>
    </SectionContainer>
  );
};

export default CategoryCardGrid;
