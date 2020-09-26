import React, { useContext, useEffect } from 'react'
import { Card } from '../components/Card'
import { LocalStorageContext } from '../context/localStorage/localStorageContext'

function isObjEmpty(obj) {
  return Object.keys(obj).length === 0
}

const compareDate = (a, b) => new Date(b.date) - new Date(a.date)

export const History = () => {
  const { state, storage, setState } = useContext(LocalStorageContext)

  useEffect(() => {
    setState({...storage('search_history')})
    // eslint-disable-next-line
  }, [])


  if (isObjEmpty(state)) {
    return (
      <h1 className="text-center">History is empty</h1>
    )
  }

  const users = Object.keys(state).map(key => {
    return {
      name: key,
      date: state[key].lastViewed,
      data: state[key]    
    }      
  })

    
  return (   
    <> 
      <h1 className="mb-3 text-center">Last viewed users</h1>
      <div className="row">   
        {
          users.sort(compareDate).map(user => {
            return ( 
              <div className="col-sm-4 mb-4" key={user.data.id}>     
                <Card user={user.data}/>
              </div>
            )
          })                
        }   
      </div>      
    </>
  )
}


