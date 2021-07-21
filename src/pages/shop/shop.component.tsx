import CategoryCardGrid from '../../components/category-card-grid/category-grid.component';
import ShopHero from '../../components/shop-hero/shop-hero.component';
import { ShopContainer } from './shop.styles';

const Shop = () => (
  <ShopContainer>
    <ShopHero />
    <CategoryCardGrid />
  </ShopContainer>
);

export default Shop;
