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
`;

export const Time = styled.li`
  display: block;
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const Appointment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;

export const AppointmentData = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${(props) => (props.available ? '#ff9000' : '#999')};
    display: block;
    font-size: 20px;
    font-weight: 500;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
