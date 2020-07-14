import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Provider = styled.li`
  display: flex;
  background: #fff;
  padding: 20px;
  border-radius: 8px;

  transition: background-color 0.2s;

  strong {
    color: #ff9000;
    font-size: 20px;
    font-weight: 500px;
    text-transform: capitalize;
  }

  &:hover {
    background-color: ${darken(0.2, '#fff')};
  }
`;

export const ProviderData = styled.button`
  display: flex;
  border: 0;
  background: none;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > img {
    border-radius: 50%;
    margin-bottom: 12px;
    height: 64px;
    width: 64px;
  }
`;
