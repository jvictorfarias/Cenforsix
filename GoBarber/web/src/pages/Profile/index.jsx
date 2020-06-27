import React, { useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Header, Content } from './styles';

const Profile = () => {
  const formRef = useRef(null);
  const { profile } = useSelector(state => state.user);

  return (
    <Container>
      <Header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </Header>

      <Content>
        <Form
          initialData={{
            name: profile.name,
            email: profile.email,
          }}
          ref={formRef}
        >
          <div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/285/abott@adorable.png'
              }
              alt={profile.name}
            />

            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" name="avatar" id="avatar" />
            </label>
          </div>

          <h1>Meu perfil</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Input
            name="oldPassword"
            icon={FiLock}
            type="password"
            placeholder="Senha antiga"
          />
          <Input
            name="passwordConfirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirme sua senha"
          />
          <Button type="submit">Alterar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
