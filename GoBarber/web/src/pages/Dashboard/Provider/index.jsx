import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import {
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
  isBefore,
  isEqual,
  parseISO,
  addDays,
  subDays,
  format,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import ptBR from 'date-fns/locale/pt';
import Header from '../../../components/Header';

import { Container, Time, Appointment, AppointmentData } from './styles';
import schedule from '../../../helpers/providerSchedule';
import api from '../../../services/api';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api
      .get('/schedule', {
        params: {
          date,
        },
      })
      .then(({ data }) => {
        const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

        const scheduleList = schedule.map((hour) => {
          const checkDate = setMilliseconds(
            setSeconds(setMinutes(setHours(date, hour), 0), 0),
            0,
          );

          const compareDate = utcToZonedTime(checkDate, timeZone);

          return {
            time: `${hour}:00h`,
            past: isBefore(compareDate, new Date()),
            appointment: data.find((appoint) =>
              isEqual(parseISO(appoint.date), compareDate),
            ),
          };
        });

        setAppointments(scheduleList);
      });
  }, [date]);

  const handlePrevDay = useCallback(() => {
    setDate(subDays(date, 1));
  }, [date]);

  const handleNextDay = useCallback(() => {
    setDate(addDays(date, 1));
  }, [date]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: ptBR }),

    [date],
  );

  return (
    <>
      <Header />
      <Container>
        <header>
          <button type="button" onClick={handlePrevDay}>
            <FiArrowLeftCircle size={36} color="#ff9000" />
          </button>
          <strong>{dateFormatted}</strong>
          <button type="button" onClick={handleNextDay}>
            <FiArrowRightCircle size={36} color="#ff9000" />
          </button>
        </header>

        <ul>
          {appointments &&
            appointments.map(({ id, time, past, appointment }) => (
              <Time past={past} key={id}>
                <Appointment>
                  <AppointmentData available={!appointment}>
                    <strong>{time}</strong>
                    <span>
                      {appointment ? appointment.user.name : 'Available'}
                    </span>
                  </AppointmentData>
                  {appointment && (
                    <img
                      src={
                        appointment.user.avatar
                          ? appointment.user.avatar.url
                          : 'https://api.adorable.io/avatars/285/abott@adorable.png'
                      }
                      alt={appointment.user.name}
                    />
                  )}
                </Appointment>
              </Time>
            ))}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
