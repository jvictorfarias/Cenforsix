import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiClipboard, FiSearch } from 'react-icons/fi';

import { Container, Deputies } from './styles';

import api from '../../services/api';

const Home = () => {
  const [deputies, setDeputies] = useState([]);
  const [newDeputy, setnewDeputy] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await api.get('/deputados', {
        params: {
          ordem: 'ASC',
          ordenarPor: 'nome',
          nome: newDeputy,
        },
      });
      setDeputies([...data.dados]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <FiClipboard size={90} />
        <h1>Citizen Watcher</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            value={newDeputy}
            onChange={(event) => setnewDeputy(event.target.value)}
            type="text"
            placeholder="Nome do parlamentar"
          />
          <button type="submit">
            <FiSearch size={15} />
          </button>
        </form>
      </Container>
      <Deputies>
        {deputies.map((deputy) => (
          <Link key={deputy.id} to={`/details/${deputy.id}`}>
            <img src={deputy.urlFoto} alt={deputy.nome} />
            {deputy.nome}
          </Link>
        ))}
      </Deputies>
    </>
  );
};

export default Home;
