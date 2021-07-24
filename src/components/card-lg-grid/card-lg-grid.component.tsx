import ProductCardLg from '../product-card-lg/product-card-lg.component';
import { SHOP_DATA } from '../../utils/shop-data';
import { CardGridContainer } from '../../styles/card-grid.styles';

const CardLgGrid = () => {
  const { products, title } = SHOP_DATA[0];
  return (
    <CardGridContainer>
      {products.map((item, index) => (
        <ProductCardLg key={index} name={item.name} price={item.price} discount={item.discount} category={title} />
      ))}
    </CardGridContainer>
  );
};

export default CardLgGrid;
