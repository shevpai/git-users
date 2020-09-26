import React from 'react'

export const Loader = () => {
  return (
    <div className="container" style={{display: "flex", marginTop: '100px', justifyContent: "center", alignItems: "center"}}>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
