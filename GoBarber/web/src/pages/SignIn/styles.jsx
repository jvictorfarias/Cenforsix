import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import SignIn from '../../assets/sign-in-background.png';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const AnimationContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  h1 {
    font-size: 20px;
    margin: 24px 0 12px 0;
    color: #f4ede8;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    margin-top: 30px;

    input {
      background: #232129;
      flex: 1;
      border-radius: 10px;
      border: 2px solid #212329;
      padding: 16px;
      color: #666360;

      &:focus {
        border: 2px solid #ff9000;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }
  }

  a {
    color: #ff9000;
    display: flex;
    margin-top: 24px;
    align-items: center;
    font-size: 16px;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignIn}) no-repeat center;
  background-size: cover;
`;
