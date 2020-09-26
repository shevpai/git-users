import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({user}) => {
  
  return (
    <div className="card"> 
      <div className="my-container">
        <img style={{width: 250, height: 300, minWidth: 100}}  src={user.avatar_url} alt={user.login} className="cart-img-top" />
      </div>              
      <div className="card-body text-center">
        <h5 className="card=title text-center">{user.login}</h5>
          {user.bio && 
          <p>
            {user.bio.length > 35 ?  user.bio.slice(0, 35) + '...' : user.bio}
          </p>}
        <Link to={'/profile/' + user.login} className="btn btn-dark center">Details</Link>
      </div>
    </div>
  )
}
