import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

export const Home = styled(Link)`
  text-decoration: none;

  div {
    display: flex;
    align-items: center;

    h1 {
      color: #f8f8f2;
      margin-left: 12px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f8f8f2;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 12px;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
