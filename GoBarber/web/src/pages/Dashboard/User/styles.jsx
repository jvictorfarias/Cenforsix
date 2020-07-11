import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #ff9000;
    font-weight: 500;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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
  justify-content: flex-start;
  align-items: center;

  > img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  button {
    margin-left: auto;
    border: 0;
    background: none;
  }

  button:hover {
    svg {
      stroke: ${shade(0.2, '#c53232')};
    }
  }
`;

export const AppointmentData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;

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
    text-transform: capitalize;
  }
`;
