import React from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Container, Home, Cart } from './styles';

const Header = () => (
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
        <span>3 itens</span>
      </div>
      <FiShoppingCart size={40} color="#f8f8f2" />
    </Cart>
  </Container>
);

export default Header;
