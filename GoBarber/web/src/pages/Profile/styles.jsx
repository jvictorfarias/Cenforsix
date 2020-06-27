import styled from 'styled-components';

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

export const Content = styled.div``;
