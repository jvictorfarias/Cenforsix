import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    provider: null,
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });
    case '@auth/SIGN_OUT_REQUEST':
      return produce(state, (draft) => {
        draft.profile = INITIAL_STATE;
      });
    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.data;
      });
    case '@user/UPDATE_AVATAR_SUCCESS':
      return produce(state, (draft) => {
        draft.profile.avatar.url = action.payload.url;
      });
    default:
      return state;
  }
};

export default user;
