import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

import { signUpRequest } from '../../store/modules/auth/actions';

const SignUp = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(6),
        });

        await schema.validate(data, { abortEarly: false });

        const { name, email, password } = data;

        dispatch(signUpRequest(name, email, password));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = {};

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
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo" />
          <h1>Faça seu cadastro</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">
              {loading ? 'Carregando...' : 'Cadastrar'}
            </Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
