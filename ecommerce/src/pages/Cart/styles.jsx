import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #19181f;
      border: 0;
      color: #f8f8f2;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: 500;
      text-transform: uppercase;
      transition: background 0.5s;

      &:hover {
        background: ${lighten(0.08, '#19181f')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }

  strong {
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 500;
  }

  button {
    background: none;
    border: 0;
    padding: 4px;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 8px;
    width: 50px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-size: 12px;
  }

  strong {
    font-size: 28px;
    margin-left: 12px;
  }
`;
