import styled, { keyframes } from 'styled-components';

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
  background: #383b40;
  max-width: 650px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto 10px;
  animation: ${appearFromBottom} 0.4s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  max-width: 650px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    margin: 5px;
    font-weight: bold;
    color: #f8f8f2;
  }
`;
