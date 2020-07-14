import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: 0;
      background: transparent;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }

  h1 {
    text-align: center;
    margin-top: 24px;
    color: #ff9000;
    font-weight: 500;
    font-size: 32px;
  }
`;

export const Time = styled.li`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  opacity: ${(props) => (props.available ? 1 : 0.6)};
`;

export const TimeButton = styled.button`
  padding: 24px;
  flex: 1;
  border: 0;
  background: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  strong {
    color: ${(props) => (props.disabled ? '#666' : '#ff9000')};
    font-weight: 500;
  }
`;
