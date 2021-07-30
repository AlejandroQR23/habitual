import { Route, RouteComponentProps } from 'react-router-dom';
import CategoryCardGrid from '../../components/category-card-grid/category-grid.component';
import FlashDeals from '../../components/flash-deals/flash-deals.component';
import ShopHero from '../../components/shop-hero/shop-hero.component';
import CategoryPage from '../category/category.component';
import { ShopContainer } from './shop.styles';

const Shop = ({ match }: RouteComponentProps) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <ShopContainer>
            <ShopHero />
            <CategoryCardGrid />
            <FlashDeals />
          </ShopContainer>
        )}
      />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  );
};

export default Shop;
