import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../store/provider/CartProvider';
import './styles.css';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const cart = useCart();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/home">Lure shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={pathname}>
            <LinkContainer to="/home">
              <Nav.Link>
                <i className="fa fa-home"></i> Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>
                <i className="fa fa-product-hunt"></i> Products
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav activeKey={pathname}>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fa fa-shopping-cart"></i> Cart{' '}
                {cart.cartProducts.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartProducts.length}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default withRouter(Header);
