import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/hompage/homepage.component';
import { GlobalStyle } from './styles/global.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
