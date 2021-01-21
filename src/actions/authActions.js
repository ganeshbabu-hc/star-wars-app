import * as types from "./authActions";

export const loginUserAction = user => {
  return {
    type: types.LOGIN_USER,
    user
  };
};
