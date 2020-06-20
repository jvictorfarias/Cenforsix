import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  token: null,
  signed: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });

    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
      });
    case '@auth/SIGN_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@auth/SIGN_OUT_REQUEST':
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
        draft.loading = false;
      });
    default:
      return state;
  }
};

export default auth;
