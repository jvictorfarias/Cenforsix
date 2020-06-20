// O que são actions?
// * Ações do usuário que disparam eventos
// * Efeitos colaterais de eventos da aplicação

export const signInRequest = (email, password) => {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
};

export const signInSuccess = (user, token) => {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user, token },
  };
};

export const signUpRequest = (name, email, password) => {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
};

export const signOutRequest = () => {
  return {
    type: '@auth/SIGN_OUT_REQUEST',
  };
};

export const signInFailure = () => {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
};
