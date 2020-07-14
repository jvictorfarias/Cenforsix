import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { subDays, addDays, format } from 'date-fns';
import PropTypes from 'prop-types';
import ptBR from 'date-fns/locale/pt-BR';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { Container, Time, TimeButton } from './styles';
import Header from '../../../components/Header';
import history from '../../../services/history';
import api from '../../../services/api';

const SelectDateTime = ({ match }) => {
  const { id } = match.params;
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    api
      .get(`/providers/${id}/available`, {
        params: {
          date,
        },
      })
      .then(({ data }) => setAvailability(data));
  }, [date, id]);

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

  const handleSelectHour = useCallback(
    (time) => {
      history.push(`/confirm-appointment/${id}/${encodeURIComponent(time)}`);
    },
    [id],
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

        <h1>Horários do provedor</h1>

        <ul>
          {availability.map((hour) => (
            <Time key={hour.value} available={hour.available}>
              <TimeButton
                type="button"
                disabled={!hour.available}
                onClick={() => handleSelectHour(hour.value)}
              >
                <strong>{hour.time}</strong>
              </TimeButton>
            </Time>
          ))}
        </ul>
      </Container>
    </>
  );
};

SelectDateTime.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SelectDateTime;
