import { LOG_IN, LOG_OUT } from "./userTypes";

const initialState = {
  user: localStorage.getItem("user"),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        user: action.user,
      };
    case LOG_OUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};
