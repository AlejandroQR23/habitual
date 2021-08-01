import { RouteComponentProps } from 'react-router-dom';
import CategoryHero from '../../components/category-hero/category-hero.component';
import ProductCardLg from '../../components/product-card-lg/product-card-lg.component';
import { selectCategory } from '../../redux/shop/shop.reducer';
import { CardGridContainer } from '../../styles/card-grid.styles';
import { CategoryContainer } from './category.styles';

interface IMatchParams {
  collectionId: string;
}

const CategoryPage = ({ match }: RouteComponentProps<IMatchParams>) => {
  const collectionId = match.params.collectionId;
  const category = selectCategory(collectionId);

  return (
    <CategoryContainer>
      <h2>{category.title}</h2>
      <CardGridContainer>
        {category.products.map((item) => (
          <ProductCardLg key={item.id} item={item} category={category.title} />
        ))}
      </CardGridContainer>
      <CategoryHero />
    </CategoryContainer>
  );
};

export default CategoryPage;
