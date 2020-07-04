import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
  updateAvatarSuccess,
} from './actions';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

  try {
    const { data } = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado');

    yield put(updateProfileSuccess(data));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao atualizar perfil');
    yield put(updateProfileFailure());
  }
}

export function* updateAvatar({ payload }) {
  const { data } = payload;

  try {
    const {
      data: { id, url },
    } = yield call(api.post, 'files', data);

    yield call(api.put, 'users', { avatar_id: id });

    yield put(updateAvatarSuccess(url));
  } catch (error) {
    toast.error('Falha ao atualizar o avatar.');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_AVATAR_REQUEST', updateAvatar),
]);
