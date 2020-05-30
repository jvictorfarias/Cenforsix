import styled from 'styled-components';
import { lighten } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    align-self: center;
    max-width: 240px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 8px;
  }

  > span {
    font-size: 22px;
    font-weight: 500;
    margin: 5px 0 20px;
  }

  button {
    background: #322c38;
    color: #f8f8f2;
    border: 0;
    border-radius: 4px;
    margin-top: auto;
    overflow: hidden;

    display: flex;
    align-items: center;

    &:hover {
      background: ${lighten(0.08, '#322c38')};
    }

    div {
      background: #19181f;
      display: flex;
      align-items: center;
      padding: 12px;

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: 500;
    }
  }
`;
