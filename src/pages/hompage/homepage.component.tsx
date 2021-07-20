import ColorCardGrid from '../../components/color-card-grid/color-card-grid.component';
import HomeHero from '../../components/home-hero/home-hero.component';
import HotDeals from '../../components/hot-deals/hot-deals.component';

const HomePage = () => (
  <div>
    <HomeHero />
    <HotDeals />
    <ColorCardGrid />
  </div>
);

export default HomePage;
