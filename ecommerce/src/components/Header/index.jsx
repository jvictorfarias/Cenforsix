import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Container, Home, Cart } from './styles';

const Header = ({ cartSize }) => (
  <Container>
    <Home to="/">
      <div>
        <FiShoppingBag size={80} color="#f8f8f2" />
        <h1>ECommerce</h1>
      </div>
    </Home>
    <Cart to="/cart">
      <div>
        <strong>Meu carrinho</strong>
        <span>{cartSize} itens</span>
      </div>
      <FiShoppingCart size={40} color="#f8f8f2" />
    </Cart>
  </Container>
);

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};
