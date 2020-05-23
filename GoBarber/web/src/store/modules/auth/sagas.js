import { call, put, takeLatest, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess } from './actions';

// Atua como middleware
// * Intercepta a action
// * Realiza side effects(busca na api/consulta api externas/ coisas assíncronas)

export function* signIn({ payload }) {
  const { email, password } = payload;

  const { data } = yield call(api.post, 'session', {
    email,
    password,
  });

  const { token, user } = data;

  yield put(signInSuccess(user, token));
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
