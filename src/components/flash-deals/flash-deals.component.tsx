import { CardGridContainer } from '../../styles/card-grid.styles';
import { SectionContainer } from '../../styles/section-container.styles';
import { SHOP_DATA } from '../../utils/shop-data';
import ProductCard from '../product-card/product-card.component';

const FlashDeals = () => {
  const { products } = SHOP_DATA[0];
  return (
    <SectionContainer>
      <h2>Flash Deals</h2>
      <CardGridContainer>
        {products.map((item, index) => (
          <ProductCard key={index} name={item.name} price={item.price} discount={item.discount} />
        ))}
      </CardGridContainer>
    </SectionContainer>
  );
};

export default FlashDeals;
