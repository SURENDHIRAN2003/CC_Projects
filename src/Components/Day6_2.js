import React from 'react';
import ProductList from './Day6_1';

const withProducts = products => {
  return () => <ProductList products={products} />;
};

export default withProducts;