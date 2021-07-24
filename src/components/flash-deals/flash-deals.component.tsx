import { CardGridContainer } from '../../styles/card-grid.styles';
import { SHOP_DATA } from '../../utils/shop-data';
import ProductCard from '../product-card/product-card.component';

const FlashDeals = () => {
  const { products } = SHOP_DATA[0];
  return (
    <div>
      <h2>Flash Deals</h2>
      <CardGridContainer>
        {products.map((item, index) => (
          <ProductCard key={index} name={item.name} price={item.price} discount={item.discount} />
        ))}
      </CardGridContainer>
    </div>
  );
};

export default FlashDeals;
