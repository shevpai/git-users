import {
  SEARCH_USER,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  RES_LOADING,
} from "../types";

export const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RES_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
