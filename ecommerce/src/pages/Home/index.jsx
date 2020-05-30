import React, { useEffect, useState, useCallback } from 'react';

import { FiShoppingCart } from 'react-icons/fi';

import { connect } from 'react-redux';
import { ProductList, Product } from './styles';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

const Home = ({ dispatch }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      const formattedProducts = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(formattedProducts);
    });
  }, []);

  const handleClickButton = useCallback(
    (product) => {
      dispatch({
        type: 'ADD_TO_CART',
        product,
      });
    },
    [dispatch],
  );

  return (
    <ProductList>
      {products.map((product) => (
        <Product key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleClickButton(product)}>
            <div>
              <FiShoppingCart size={18} /> 3
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </Product>
      ))}
    </ProductList>
  );
};

export default connect()(Home);
