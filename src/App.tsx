import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/hompage/homepage.component';
import Shop from './pages/shop/shop.component';
import { GlobalStyle } from './styles/global.styles';
import { PageContent } from './styles/page.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <PageContent>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
        </PageContent>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
