import React, { useEffect, useState, useCallback } from 'react';

import { FiXCircle } from 'react-icons/fi';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Container, Time, Appointment, AppointmentData } from './styles';
import history from '../../../services/history';
import Header from '../../../components/Header';

import api from '../../../services/api';
import Button from '../../../components/Button';

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get('/appointments').then(({ data }) => {
      const parsedAppointments = data.map((appointment) => ({
        ...appointment,
        parsedDate: formatRelative(parseISO(appointment.date), new Date(), {
          locale: ptBR,
        }),
      }));

      setAppointments(parsedAppointments);
    });
  }, []);

  const handleCancelAppointment = useCallback(
    async (id) => {
      const { data } = await api.delete(`/appointments/${id}`);

      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: data.canceled_at,
            }
          : {
              ...appointment,
            },
      );

      setAppointments(updatedAppointments);
    },
    [appointments],
  );

  return (
    <>
      <Header />
      <Container>
        <ul>
          <h1>Agendamentos</h1>
          {appointments.map(
            (appointment) =>
              !appointment.canceled_at && (
                <Time key={appointment.id} past={appointment.past}>
                  <Appointment>
                    <img
                      src={
                        appointment.provider.avatar
                          ? appointment.provider.avatar.url
                          : 'https://api.adorable.io/avatars/285/abott@adorable.png'
                      }
                      alt={appointment.provider.name}
                    />

                    <AppointmentData>
                      <strong>{appointment.provider.name}</strong>
                      <span>{appointment.parsedDate}</span>
                    </AppointmentData>
                    {appointment.cancelable && !appointment.canceled_at && (
                      <button
                        type="button"
                        onClick={() => {
                          handleCancelAppointment(appointment.id);
                        }}
                      >
                        <FiXCircle size={32} color="#c53232" />
                      </button>
                    )}
                  </Appointment>
                </Time>
              ),
          )}
          <Button onClick={() => history.push('/providers')}>
            Criar agendamento
          </Button>
        </ul>
      </Container>
    </>
  );
};

export default UserDashboard;
