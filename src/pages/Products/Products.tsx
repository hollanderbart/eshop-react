import React, { Fragment } from 'react';
import MySpinner from '../../components/MySpinner';
import Product from '../../components/Product';
import { useProducts } from '../../services/ProductsService';
import './styles.css';

const Products = () => {
  const { data: products, isLoading } = useProducts();

  if (isLoading || !products) return <MySpinner key={0} text={'Loading...'} />;

  return (
    <Fragment>
      <div className="row">
        {products.map((product, i) => (
          <Product productId={product.id} key={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
