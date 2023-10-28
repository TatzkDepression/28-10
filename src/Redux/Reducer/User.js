import { SET_INFO } from "../constant/user";

let userJason = localStorage.getItem("USER");
let user = JSON.parse(userJason);
const initialState = {
  info: user,
};

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INFO:
      return { ...state, info: payload };

    default:
      return state;
  }
};
