import React from 'react';

import { FiPlusCircle, FiMinusCircle, FiDelete } from 'react-icons/fi';
import { Container, ProductTable, Control, Total } from './styles';

const Cart = () => {
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
          <tr>
            <td>
              <img
                src="https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_3GG.jpg"
                alt="tv"
              />
            </td>
            <td>
              <strong>Celular motorola</strong>
              <span>R$1223,90</span>
            </td>
            <td>
              <Control>
                <button type="button">
                  <FiMinusCircle size={20} color="#19181f" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <FiPlusCircle size={20} color="#19181f" />
                </button>
              </Control>
            </td>
            <td>
              <strong>R$2.447,80</strong>
            </td>
            <td>
              <button type="button">
                <FiDelete size={20} color="#19181f" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_3GG.jpg"
                alt="tv"
              />
            </td>
            <td>
              <strong>Celular motorola</strong>
              <span>R$1223,90</span>
            </td>
            <td>
              <Control>
                <button type="button">
                  <FiMinusCircle size={20} color="#19181f" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <FiPlusCircle size={20} color="#19181f" />
                </button>
              </Control>
            </td>
            <td>
              <strong>R$2.447,80</strong>
            </td>
            <td>
              <button type="button">
                <FiDelete size={20} color="#19181f" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_3GG.jpg"
                alt="tv"
              />
            </td>
            <td>
              <strong>Celular motorola</strong>
              <span>R$1223,90</span>
            </td>
            <td>
              <Control>
                <button type="button">
                  <FiMinusCircle size={20} color="#19181f" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <FiPlusCircle size={20} color="#19181f" />
                </button>
              </Control>
            </td>
            <td>
              <strong>R$2.447,80</strong>
            </td>
            <td>
              <button type="button">
                <FiDelete size={20} color="#19181f" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$2.447,80</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
