import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  updateProfileRequest,
  updateAvatarRequest,
} from '../../store/modules/user/actions';

import { Container, Header, Content, AvatarInput } from './styles';

const Profile = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite email válido')
            .required('Email obrigatório'),
          oldPassword: Yup.string(),
          password: Yup.string().when('oldPassword', {
            is: String,
            then: Yup.string().min(6),
            otherwise: Yup.string(),
          }),
          passwordConfirmation: Yup.string()
            .when('oldPassword', {
              is: String,
              then: Yup.string().required('Campo obrigatório'),
            })
            .oneOf([Yup.ref('password')], 'Senhas não conferem'),
        });

        await schema.validate(data, { abortEarly: false });

        dispatch(updateProfileRequest(data));
      } catch (err) {
        toast.error('Validação de dados falhou');
        if (err instanceof Yup.ValidationError) {
          const validationErrors = {};

          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });

          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [dispatch],
  );

  const handleAvatarchange = useCallback(
    (event) => {
      if (event.target.files) {
        const data = new FormData();

        data.append('file', event.target.files[0]);
        dispatch(updateAvatarRequest(data));
      }
    },
    [dispatch],
  );

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
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/285/abott@adorable.png'
              }
              alt={profile.name}
            />

            <label htmlFor="avatar">
              <FiCamera />
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleAvatarchange}
              />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="oldPassword"
            icon={FiLock}
            type="password"
            placeholder="Senha antiga"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
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
