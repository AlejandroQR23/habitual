import ProductCardLg from '../product-card-lg/product-card-lg.component';
import { CardGridContainer } from '../../styles/card-grid.styles';
import { useAppSelector } from '../../redux/hooks';

const CardLgGrid = () => {
  const { products, title } = useAppSelector((state) => state.shop.categories[0]);
  return (
    <CardGridContainer>
      {products.map(({ id, ...otherProductsProps }) => (
        <ProductCardLg key={id} id={id} category={title} {...otherProductsProps} />
      ))}
    </CardGridContainer>
  );
};

export default CardLgGrid;
