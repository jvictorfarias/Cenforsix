import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '../../../services/history';
import Header from '../../../components/Header';
import api from '../../../services/api';
import Button from '../../../components/Button';

const ConfirmAppointment = ({ match }) => {
  const { id, time } = match.params;
  const dateSelected = decodeURIComponent(time);

  const [provider, setProvider] = useState({});
  const { profile } = useSelector((state) => state.user);

  useEffect(() => {
    api.get('/providers').then(({ data }) => {
      const findProvider = data.find((prov) => prov.id === Number(id));
      setProvider(findProvider);
    });
  }, [id]);

  const formattedDate = useMemo(() => {
    return formatRelative(parseISO(dateSelected), new Date(), {
      locale: ptBR,
    });
  }, [dateSelected]);

  const handleCreateAppointment = useCallback(async () => {
    try {
      await api.post('/appointments', {
        provider_id: provider.id,
        user_id: profile.id,
        date: dateSelected,
      });

      toast.success('Agendamento criado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Falha ao criar agendamento');
    }
  }, [dateSelected, profile.id, provider.id]);

  return (
    <>
      <Header />
      <Container>
        <img
          src={
            provider.avatar
              ? provider.avatar.url
              : 'https://api.adorable.io/avatars/285/abott@adorable.png'
          }
          alt={provider.name}
        />
        <strong>{provider.name}</strong>
        <span>{formattedDate}</span>
        <div>
          <Button onClick={handleCreateAppointment}>
            Confirmar agendamento
          </Button>
        </div>
      </Container>
    </>
  );
};

ConfirmAppointment.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ConfirmAppointment;
