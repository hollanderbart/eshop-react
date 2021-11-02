/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useProduct } from '../../services/ProductsService';
import { CartProduct, useCart } from '../../store/provider/CartProvider';
import './styles.css';

type Props = {
  cartProduct: CartProduct;
  onAddProduct: (productId: number, price: number) => void;
  onRemoveProduct: (productId: number) => void;
};

const CartProductSummary = ({
  cartProduct,
  onAddProduct,
  onRemoveProduct,
}: Props) => {
  const { data: product, isLoading } = useProduct(cartProduct.productId);

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  return (
    <Fragment key={cartProduct.productId}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <Link to={`/product-details/${product.id}`}>
            <img
              className="img-responsive cart-img-obj-fit"
              src={require(`../../static/products/${product.image}`).default}
              alt="prewiew"
              width="120"
              height="80"
            />
          </Link>
        </div>
        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
          <h4 className="product-name">{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
          <div
            className="col-3 col-sm-3 col-md-6 text-md-right"
            style={{ paddingTop: 5 }}
          >
            <h5>
              <strong>${product.price.toFixed(2)}</strong>
            </h5>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <div className="quantity">
              <button
                onClick={() => onAddProduct(product.id, product.price)}
                className="plus"
              >
                +
              </button>
              <span className="quantity-number">{cartProduct.quantity}</span>
              <button
                onClick={() => onRemoveProduct(product.id)}
                className="minus"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

const Cart = () => {
  const cart = useCart();

  return (
    <Fragment>
      {cart.cartProducts.length === 0 ? (
        <Row className="justify-content-center">
          <h4>There are no products in the cart yet.</h4>
        </Row>
      ) : (
        <Fragment>
          <div className="card shopping-cart">
            <div className="card-header  text-primary">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
              Shopping cart
              <div className="clearfix"></div>
            </div>
            <div className="card-body">
              {cart.cartProducts.map((product) => (
                <CartProductSummary
                  key={product.productId}
                  cartProduct={product}
                  onAddProduct={cart.addProduct}
                  onRemoveProduct={cart.removeProduct}
                />
              ))}

              <div className="pull-right">
                <Link to={'/products'}>
                  <button className="btn btn-outline-primary pull-right">
                    Continue shopping
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="cupone code"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="submit"
                      className="btn btn-default"
                      value="Use cupone"
                    />
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ margin: 10 }}>
                <a href="" className="btn btn-primary pull-right">
                  Checkout
                </a>
                <div className="pull-right" style={{ margin: 5 }}>
                  Total price:{' '}
                  <b>
                    $
                    {cart.cartProducts
                      .map((product) => product.price * product.quantity)[0]
                      .toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
