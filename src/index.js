import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import CartProvider from './store/provider/CartProvider';

const appElement = document.getElementById('root');

const queryClient = new QueryClient();

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <Header />
          <Container className="margin-top">
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/products" exact component={Products} />
              <Route
                path="/product-details/:id"
                exact
                component={ProductDetails}
              />
              <Route path="/cart" component={Cart} />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Redirect to="/error" />
            </Switch>
          </Container>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};


ReactDOM.render(
  <Root />,
appElement,);