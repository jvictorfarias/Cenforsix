import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

const SignIn = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().min(6),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;

        dispatch(signInRequest(email, password));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = {};
          // Erro de validação
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });

          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo" />
          <h1>Faça seu logon</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">
              {loading ? 'Carregando...' : 'Entrar'}
            </Button>
          </Form>
          <Link to="/register">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
