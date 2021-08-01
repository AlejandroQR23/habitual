import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component';
import Construction from './pages/construction/construction.component';
import HomePage from './pages/hompage/homepage.component';
import Shop from './pages/shop/shop.component';
import { GlobalStyle } from './styles/global.styles';
import { PageContent } from './styles/page.styles';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <PageContent>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={Construction} />
            <Route path="/signin" component={Construction} />
          </PageContent>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
