import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: #383b40;
  max-width: 650px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding:30px;
  margin: 80px auto 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  h1 {
    margin: 15px 15px;
  }
`;

export const InfoContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  p{
    font-size: 16px;
    margin: 5px;
    font-weight: 500;
    color: #f8f8f2;
  }
`;

