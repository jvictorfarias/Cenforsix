import { call, put, takeLatest, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import { signInSuccess, signInFailure } from './actions';
import history from '../../../services/history';

// Atua como middleware
// * Intercepta a action
// * Realiza side effects(busca na api/consulta api externas/ comunicações assíncronas)

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro na autenticação, verifique suas credenciais.');
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, provider } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider,
    });

    toast.success('Usuário criado com sucesso');
    history.push('/');
  } catch (error) {
    toast.error('Falha ao criar usuário');
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
