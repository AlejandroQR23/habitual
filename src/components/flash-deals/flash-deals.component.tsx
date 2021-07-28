import { CardGridContainer } from '../../styles/card-grid.styles';
import { SectionContainer } from '../../styles/section-container.styles';
import ProductCard from '../product-card/product-card.component';
import { useAppSelector } from '../../redux/hooks';
import { selectDiscountShopItems } from '../../redux/shop/shop.reducer';

const FlashDeals = () => {
  const products = useAppSelector(selectDiscountShopItems);
  return (
    <SectionContainer>
      <h2>Flash Deals</h2>
      <CardGridContainer>
        {products
          .filter((_item, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </CardGridContainer>
    </SectionContainer>
  );
};

export default FlashDeals;
