import React, { useContext, useReducer } from "react";
import Axios from "axios";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import { LocalStorageContext } from "../localStorage/localStorageContext";
import { AlertContext } from "../alert/alertContext";
import { useHistory } from "react-router-dom";

// types
import {
  SEARCH_USER,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
  RES_LOADING,
} from "../types";

export const GithubState = ({ children }) => {
  const { state: localHistory, setState } = useContext(LocalStorageContext);
  const alert = useContext(AlertContext);
  const history = useHistory();

  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const resLoading = () => dispatch({ type: RES_LOADING });

  const search = async (value) => {
    setLoading();
    try {
      const response = await Axios.get(
        `https://api.github.com/search/users?q=${value}&`
      );

      dispatch({
        type: SEARCH_USER,
        payload: response.data.items,
      });

      return response.data.items;
    } catch (e) {
      alert.show("Something went wrong", "danger");
      resLoading();
    }
  };

  const getUser = async (name) => {
    setLoading();

    try {
      const response = await Axios.get(`https://api.github.com/users/${name}?`);

      dispatch({
        type: GET_USER,
        payload: response.data,
      });

      const userData = response.data;
      userData.lastViewed = new Date().toJSON();

      setState({ ...localHistory, [userData.login]: userData });
      localStorage.setItem(
        "search_history",
        JSON.stringify({ ...localHistory, [userData.login]: userData })
      );
    } catch (e) {
      history.push("/");
      alert.show("Something went wrong", "danger");
      resLoading();
    }
  };

  const getRepos = async (name) => {
    setLoading();

    try {
      const response = await Axios.get(
        `https://api.github.com/users/${name}/repos?per_page=5&`
      );

      dispatch({
        type: GET_REPOS,
        payload: response.data,
      });
    } catch (e) {
      history.push("/");
      alert.show("Something went wrong", "danger");
      resLoading();
    }
  };

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        setLoading,
        resLoading,
        search,
        getUser,
        getRepos,
        clearUsers,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
