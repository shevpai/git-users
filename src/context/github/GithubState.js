import React, { useContext, useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { SEARCH_USER, 
         GET_USER, 
         GET_REPOS, 
         CLEAR_USERS, 
         SET_LOADING, 
         RES_LOADING } from '../types'
import Axios from 'axios'
import { LocalStorageContext } from '../localStorage/localStorageContext'

export const GithubState = ({children}) => {
  const { state: localHistory, setState } = useContext(LocalStorageContext)
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async value => {
    setLoading()

    const response = await Axios.get(`https://api.github.com/search/users?q=${value}&`)

    dispatch({
      type: SEARCH_USER,
      payload: response.data.items
    })

    return response.data.items
  }

  const getUser = async name => {
   setLoading()

    const response = await Axios.get(`https://api.github.com/users/${name}?`)
    
    dispatch({
      type: GET_USER,
      payload: response.data
    })

    const userData = response.data
    userData.lastViewed = new Date().toJSON()

    setState({...localHistory, [userData.login]: userData})
    localStorage.setItem('search_history',
         JSON.stringify({...localHistory, [userData.login]: userData}))
  }

  const getRepos = async name => {
    setLoading()

    const response = await Axios.get(`https://api.github.com/users/${name}/repos?per_page=5&`)

    dispatch({
      type: GET_REPOS,
      payload: response.data
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})
  
  const setLoading = () => dispatch({type: SET_LOADING})  

  const resLoading = () => dispatch({type: RES_LOADING})

  const {user, users, repos, loading} = state

  return (
    <GithubContext.Provider value={{
      setLoading, resLoading, search, getUser, getRepos, clearUsers,
      user, users, repos, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}
