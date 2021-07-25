import { CardGridContainer } from '../../styles/card-grid.styles';
import CategoryCard from '../category-card/category-card.component';
import { SectionContainer } from '../../styles/section-container.styles';
import { useAppSelector } from '../../redux/hooks';

const CategoryCardGrid = () => {
  const categories = useAppSelector((state) => state.directory.categories);
  return (
    <SectionContainer>
      <h2>Categories</h2>
      <CardGridContainer>
        {categories.map(({ id, ...otherSectionProps }) => (
          <CategoryCard key={id} {...otherSectionProps} />
        ))}
      </CardGridContainer>
    </SectionContainer>
  );
};

export default CategoryCardGrid;
