import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null

  return (
    <div 
      style={{ minWidth: 100, maxWidth: 900, margin: '0 auto'}}
      className={`alert alert-${alert.type || 'secondary'} alert-dismissible mb-4`} 
      role="alert">
      {alert.text}
      <button type="button" className="close" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}
