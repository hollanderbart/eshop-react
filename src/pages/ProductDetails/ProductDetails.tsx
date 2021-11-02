import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { RouteComponentProps } from 'react-router';
import MySpinner from '../../components/MySpinner';
import { useProduct } from '../../services/ProductsService';
import { useCart } from '../../store/provider/CartProvider';
import './styles.css';

type Props = {
  id?: string;
};

const ProductDetails = ({ match, history }: RouteComponentProps<Props>) => {
  const id = match.params.id ? parseInt(match.params.id) : 0;
  const { data: productData, isLoading } = useProduct(id);
  const cart = useCart();

  if (isLoading || !productData) {
    return <div>Loading</div>;
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

  if (isLoading || !productData) {
    return <MySpinner key={0} text={'Loading...'} />;
  }

  const productImage =
    require(`../../static/products/${productData.image}`).default;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <aside className="col-sm-5 border-right">
          <div>
            <img className="main-img d-md-none" src={productImage} alt="Lure" />
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: productData.shortDescription,
                  isFluidWidth: true,
                  src: productImage,
                },
                largeImage: {
                  src: productImage,
                  width: 1200,
                  height: 1200,
                },
                enlargedImageContainerStyle: {
                  zIndex: 9,
                  backgroundColor: 'white',
                  objectFit: 'cover',
                },
                enlargedImageContainerDimensions: {
                  width: '150%',
                  height: '120%',
                },
                className: 'd-none d-md-block',
              }}
            />
          </div>
        </aside>
        <aside className="col-sm-7">
          <article className="p-5">
            <h3 className="title mb-3">{productData.name}</h3>

            <div className="mb-3">
              <var className="price h3 text-success">
                <span className="currency">US $</span>
                <span className="num">{productData.price.toFixed(2)}</span>
              </var>
            </div>
            <dl>
              <dt>Description</dt>
              <dd>
                <p>{productData.description}</p>
              </dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-3">Model#</dt>
              <dd className="col-sm-9">{productData.modelNum}</dd>

              <dt className="col-sm-3">Color</dt>
              <dd className="col-sm-9">{productData.color}</dd>

              <dt className="col-sm-3">Delivery</dt>
              <dd className="col-sm-9">{productData.delivery}</dd>
            </dl>

            <hr />
            <div className="row">
              <div className="col-sm-5">
                <dl className="dlist-inline">
                  <dt>Weight: </dt>
                  <dd className="pl-2">
                    <span className="form-check-label">{`${productData.weight} g`}</span>
                  </dd>
                </dl>
              </div>
              <div className="col-sm-7">
                <dl className="dlist-inline">
                  <dt>Size: </dt>
                  <dd>
                    <span className="form-check-label">{`${productData.size} cm`}</span>
                  </dd>
                </dl>
              </div>
            </div>
            <hr />
            <button
              onClick={toggleAddProduct}
              className={
                !isAdded()
                  ? 'btn  btn-outline-primary'
                  : 'btn  btn-outline-danger'
              }
            >
              <i className="fa fa-shopping-cart"></i>{' '}
              {!isAdded() ? 'Add to Cart' : 'Added to Cart'}
            </button>
          </article>
        </aside>
      </div>
    </div>
  );
};

export default ProductDetails;
