import React from 'react'

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 100    
  },
  conteiner: {
    display: 'flex',
    alignItems: 'center'
  } 
}

export const Repos = ({repos}) => {
  return (
    <div className="row">
      {repos.map(repo => (
        <div className="col-sm-6 mb-1" key={repo.id}>
          <div className="card mb-4">
          <div className="card-body" style={styles.body}>
            <div style={styles.conteiner}>
              <svg className="octicon-repo mr-2 mb-1 flex-shrink-0" 
                  viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
              </svg>

              <h5>
              <a href={repo.html_url}
              target="_blank" 
              rel="noopener noreferrer"
              >{repo.name}</a>
              </h5>      
            </div>  

            {repo.description && <span className="text-secondary">{repo.description}</span>}            
          </div>
        </div>

        </div>
   
      ))}      
    </div>
  )
}
