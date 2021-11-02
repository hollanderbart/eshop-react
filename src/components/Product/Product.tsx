import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProduct } from '../../services/ProductsService';
import { useCart } from '../../store/provider/CartProvider';
import './styles.css';

type Props = {
  productId: number;
};

const Product = ({ productId }: Props) => {
  const { data: productData, isLoading } = useProduct(productId);
  const cart = useCart();

  if (isLoading || !productData) {
    return (
      <Col
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        key={0}
        className="container"
        style={{ display: 'block' }}
      >
        <div className="row justify-content-center align-self-center h-300">
          <Spinner animation="border" className="align-self-center" />
        </div>
      </Col>
    );
  }

  const isAdded = () => {
    return (
      cart.cartProducts.length > 0 &&
      cart.cartProducts.find((p) => p.productId === productData.id)
    );
  };

  const toggleAddProduct = () => {
    if (!isAdded()) {
      cart.addProduct(productData.id, productData.price);
    } else {
      cart.removeProduct(productData.id);
    }
  };

  return (
    <Col
      xs={12}
      sm={6}
      xl={3}
      lg={4}
      className="mb-3"
      style={{ display: 'block' }}
    >
      <Card className="product-card">
        <Link to={`/product-details/${productId}`}>
          <Card.Img
            className="product-img"
            variant="top"
            src={require(`../../static/products/${productData.image}`).default}
          />
        </Link>
        <Card.Body>
          <h4 className="card-title">{productData.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            Description: {productData.shortDescription}
          </h6>
          <Card.Text>{productData.description}</Card.Text>

          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4">${productData.price.toFixed(2)}</h5>
            </div>
            <Button
              variant={!isAdded() ? 'outline-primary' : 'danger'}
              onClick={toggleAddProduct}
              className="add-to-cart mt-3"
            >
              <i className="fa fa-shopping-cart"></i>{' '}
              {!isAdded() ? 'Add to Cart' : 'Added to Cart'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
