import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to{
      opacity: 1;
      transform: translateY(0);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2d2f34;
  max-width: 650px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto 10px;

  svg {
    margin-bottom: 20px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    margin: 30px;

    input {
      flex: 1;
      padding: 10px 20px;
      border-radius: 4px 0 0 4px;
      font-size: 16px;
      color: #f8f8f2;
    }

    button {
      background: #72c0ea;
      border: 0;
      border-radius: 0 4px 4px 0;
      padding: 0 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-top: 15px;
      }
    }
  }
`;

export const Deputies = styled.div`
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  a {
    background: #383b40;
    text-decoration: none;
    border-radius: 4px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: background-color 0.2s;
    transition: transform 0.2s;
    font-size: 20px;
    animation: ${appearFromBottom} 0.4s;
    color: #f8f8f2;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
      background-color: ${shade(0.2, '#383b40')};
    }

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
  }
`;
