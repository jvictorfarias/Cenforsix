import React, { useEffect, useState, useCallback } from 'react';

import { FiShoppingCart } from 'react-icons/fi';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCartRequest } from '../../store/modules/Cart/actions';
import { ProductList, Product } from './styles';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

const Home = ({ amount, dispatch }) => {
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
    (id) => {
      dispatch(addToCartRequest(id));
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

          <button type="button" onClick={() => handleClickButton(product.id)}>
            <div>
              <FiShoppingCart size={18} /> {amount[product.id] || 0}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </Product>
      ))}
    </ProductList>
  );
};

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  amount: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
