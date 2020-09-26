import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'


export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)  

  const onSubmit = async event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()    

    if (value.trim()) {
      alert.hide()      
      const data = await github.search(value.trim()) 

      if (data.length === 0) {
        alert.show(`No user matches with username "${value}"`)
      }

    } else alert.show('Input is empty, enter some value to search please')    

    setValue('')
  }


  return (
    <div className="form-group mb-4">
      <input 
        style={{ minWidth: 100, maxWidth: 900, margin: '0 auto' }}
        type="text"
        className="form-control"
        placeholder="Enter github username here.."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}
