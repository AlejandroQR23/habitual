import CategoryCardGrid from '../../components/category-card-grid/category-grid.component';
import FlashDeals from '../../components/flash-deals/flash-deals.component';
import ShopHero from '../../components/shop-hero/shop-hero.component';
import { ShopContainer } from './shop.styles';

const Shop = () => (
  <ShopContainer>
    <ShopHero />
    <CategoryCardGrid />
    <FlashDeals />
  </ShopContainer>
);

export default Shop;
