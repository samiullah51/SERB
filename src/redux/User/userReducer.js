import { CURRENT_CHAT, LOG_IN, LOG_OUT, SELECTED } from "./userTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  selected: "",
  currentChat: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, user: action.user };
    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    case SELECTED:
      return {
        ...state,
        selected: action.selected,
      };
    case CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.currentChat,
      };
    default:
      return state;
  }
};
