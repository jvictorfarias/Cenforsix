import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const Header = styled.header`
  background: #28262e;
  height: 144px;
  display: flex;
  align-items: center;

  div {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    svg {
      color: #999591;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -180px auto 0;
  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: center;
      font-weight: 500;
      color: #ff9000;
    }

    div:nth-child(5) {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    bottom: 0;
    right: 0;
    background: #ff9000;
    border-radius: 50%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    input {
      display: none;
    }

    &:hover {
      cursor: pointer;
      background: ${shade(0.2, '#ff9000')};
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;
