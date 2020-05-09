import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container, HeaderContainer, InfoContainer } from './styles';

const Details = ({ match }) => {
  const [deputy, setDeputy] = useState({});

  const { id } = match.params;

  useEffect(() => {
    api.get(`/deputados/${id}`).then((response) => {
      setDeputy(response.data.dados.ultimoStatus);
    });
  }, [id]);

  return (
    <Container>
      <HeaderContainer>
        <img src={deputy.urlFoto} alt="foto do deputado" />
        <h1>{deputy.nome}</h1>
      </HeaderContainer>
      <InfoContainer>
        <p>Estado: {deputy.siglaUf}</p>
        <p>Partido: {deputy.siglaPartido}</p>
        <p>Email: {deputy.email}</p>
        <p>Situação: {deputy.situacao}</p>
      </InfoContainer>
    </Container>
  );
};

export default Details;

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
