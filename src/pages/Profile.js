import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Loader } from '../components/Loader/Loader'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({match}) => {
  const urlName = match.params.name
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)


  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)

    // eslint-disable-next-line
  }, [])


  if (loading) {
    return <Loader />
  }  


  const {    
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, 
    followers, following,
    public_repos, public_gists
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">Back</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} 
                   alt={name} 
                   style={{width: 250, height: 300, minWidth: 100}} />
              <h1 className="mt-3">{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && <Fragment><h3>BIO</h3><p>{bio}</p></Fragment>}
              <a href={html_url}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn btn-dark mb-3">
                   Open GitHub
             </a>
              <ul style={{listStyle: 'none', marginBottom: '7px', padding: 0}}>
                {login && <li><strong>Username:&nbsp;</strong>{login}</li>}
                {company && <li><strong>Company:&nbsp;</strong>{company}</li>}
                {blog && <li><strong>Website:&nbsp;</strong>
                          <a 
                            href={blog}
                            target="_blank" 
                            rel="noopener noreferrer" 
                          >{blog}</a></li>}
              </ul>

              <div className="badge badge-primary mr-1">Followers: {followers}</div>            
              <div className="badge badge-success mr-1">Follow: {following}</div>            
              <div className="badge badge-info mr-1">Repositories: {public_repos}</div>            
              <div className="badge badge-dark mr-1">Gists: {public_gists}</div>            

            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  )
}
