import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border: 0;
  font-weight: bold;
  height: 56px;
  border-radius: 10px;
  margin-top: 16px;
  color: #312e38;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
