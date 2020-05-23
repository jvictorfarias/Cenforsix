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

export const signInFailure = () => {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
};
