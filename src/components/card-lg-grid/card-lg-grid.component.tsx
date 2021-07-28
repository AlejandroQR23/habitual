import ProductCardLg from '../product-card-lg/product-card-lg.component';
import { CardGridContainer } from '../../styles/card-grid.styles';
import { useAppSelector } from '../../redux/hooks';
import { selectDiscountShopItems, selectShopCategories } from '../../redux/shop/shop.reducer';

const CardLgGrid = () => {
  const [{ title }] = useAppSelector(selectShopCategories);
  const products = useAppSelector(selectDiscountShopItems);

  return (
    <CardGridContainer>
      {products
        .filter((_item, idx) => idx < 3)
        .map((item) => (
          <ProductCardLg key={item.id} item={item} category={title} />
        ))}
    </CardGridContainer>
  );
};

export default CardLgGrid;
