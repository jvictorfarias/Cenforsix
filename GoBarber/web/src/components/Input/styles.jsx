import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #212329;
  padding: 8px;
  width: 100%;
  align-items: center;
  display: flex;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}

  ${props =>
    props.isErrored &&
    css`
      svg {
        color: #c53535;
      }
      border-color: #c53535;
    `}

  ${props =>
    props.isFocused &&
    css`
      svg {
        color: #ff9000;
      }
      border-color: #ff9000;
    `}



  input {
    background: transparent;
    flex: 1;
    border: 0;
    padding: 16px;
    color: #666360;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-left: 4px;
  }
`;
