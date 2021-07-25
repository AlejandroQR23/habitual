import { CardGridContainer } from '../../styles/card-grid.styles';
import { SectionContainer } from '../../styles/section-container.styles';
import ProductCard from '../product-card/product-card.component';
import { useAppSelector } from '../../redux/hooks';

const FlashDeals = () => {
  const { products } = useAppSelector((state) => state.shop.categories[0]);
  return (
    <SectionContainer>
      <h2>Flash Deals</h2>
      <CardGridContainer>
        {products.map(({ id, ...otherProductProps }) => (
          <ProductCard key={id} {...otherProductProps} />
        ))}
      </CardGridContainer>
    </SectionContainer>
  );
};

export default FlashDeals;
