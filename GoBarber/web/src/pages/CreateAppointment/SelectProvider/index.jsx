import React, { useEffect, useState, useCallback } from 'react';

import { Container, Provider, ProviderData } from './styles';
import history from '../../../services/history';
import Header from '../../../components/Header';
import api from '../../../services/api';

const SelectProvider = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    api.get('/providers').then(({ data }) => {
      setProviders(data);
    });
  }, []);

  const handleSelectProvider = useCallback((id) => {
    history.push(`/providers/${id}`);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ul>
          {providers.map((provider) => (
            <Provider key={provider.id}>
              <ProviderData onClick={() => handleSelectProvider(provider.id)}>
                <img
                  src={
                    provider.avatar
                      ? provider.avatar.url
                      : 'https://api.adorable.io/avatars/285/abott@adorable.png'
                  }
                  alt={provider.name}
                />
                <strong>{provider.name}</strong>
              </ProviderData>
            </Provider>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default SelectProvider;
