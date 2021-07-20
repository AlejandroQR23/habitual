import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/hompage/homepage.component';
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
        </PageContent>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
