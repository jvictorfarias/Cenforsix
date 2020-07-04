// Profile

export const updateProfileRequest = (data) => {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
};

export const updateProfileSuccess = (data) => {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { data },
  };
};

export const updateProfileFailure = () => {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
};

// Avatar

export const updateAvatarRequest = (data) => {
  return {
    type: '@user/UPDATE_AVATAR_REQUEST',
    payload: { data },
  };
};

export const updateAvatarSuccess = (url) => {
  return {
    type: '@user/UPDATE_AVATAR_SUCCESS',
    payload: { url },
  };
};

export const updateAvatarFailure = () => {
  return {
    type: '@user/UPDATE_AVATAR_FAILURE',
  };
};
