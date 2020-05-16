import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import SignUp from '../../assets/sign-up-background.png';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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
  animation: ${appearFromRight} 1s;

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
  }

  a {
    color: #f4ede8;
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
  background: url(${SignUp}) no-repeat center;
  background-size: cover;
`;
