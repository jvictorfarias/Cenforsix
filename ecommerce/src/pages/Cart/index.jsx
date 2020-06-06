import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiPlusCircle, FiMinusCircle, FiDelete } from 'react-icons/fi';
import { removeFromCart, updateAmount } from '../../store/modules/Cart/actions';
import { Container, ProductTable, Control, Total } from './styles';
import { formatPrice } from '../../utils/format';

const Cart = ({ cart, total, dispatch }) => {
  const increment = useCallback(
    (product) => {
      dispatch(updateAmount(product.id, product.amount + 1));
    },
    [dispatch],
  );

  const decrement = useCallback(
    (product) => {
      dispatch(updateAmount(product.id, product.amount - 1));
    },
    [dispatch],
  );

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <Control>
                  <button type="button" onClick={() => decrement(product)}>
                    <FiMinusCircle size={20} color="#19181f" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <FiPlusCircle size={20} color="#19181f" />
                  </button>
                </Control>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <FiDelete size={20} color="#19181f" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});

export default connect(mapStateToProps)(Cart);

Cart.propTypes = {
  total: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      formattedPrice: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};
