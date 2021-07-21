import ColorCardGrid from '../../components/color-card-grid/color-card-grid.component';
import HomeHero from '../../components/home-hero/home-hero.component';
import HotDeals from '../../components/hot-deals/hot-deals.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <HomeHero />
    <HotDeals />
    <ColorCardGrid />
  </HomePageContainer>
);

export default HomePage;
