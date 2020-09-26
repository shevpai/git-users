import React, { useState } from 'react'
import { LocalStorageContext } from './localStorageContext'


export const LocalStorageState = ({ children }) => { 
  const [state, setState] = useState({})

  const storage = (key, data = null) => {

    if (!data) {
      return JSON.parse(localStorage.getItem(key))
    } 

    setState({...state, ...data})    
    localStorage.setItem(key, JSON.stringify(state))
  }

  const clearHistory = () => {
    localStorage.removeItem('search_history')
    setState({})
  }


  return (
    <LocalStorageContext.Provider value={{ storage, state, setState, clearHistory }}>
      {children}
    </LocalStorageContext.Provider>
  )
}
