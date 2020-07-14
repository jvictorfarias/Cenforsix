import styled from 'styled-components';

export const Container = styled.div`
  width: 960px;
  margin: 50px auto;
  background: #fff;
  border-radius: 8px;
  padding: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  strong {
    margin-top: 24px;
    color: #ff9000;
    font-size: 24px;
  }

  span {
    color: #666;
    font-size: 16px;
    margin-top: 12px;
    text-transform: capitalize;
  }

  div {
    width: 300px;
    display: flex;

    button {
      flex: 1;
    }
  }
`;
