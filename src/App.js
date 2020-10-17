import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/GithubState';
import { LocalStorageState } from './context/localStorage/LocalStorageState';


function App() {

  return (  
    <Router>
      <LocalStorageState>
        <AlertState>
          <GithubState>         
            <Navbar />
            <div className="container pt-4">   
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/history" component={History} />
                <Route path="/profile/:name" component={Profile} />
              </Switch>
            </div>
          </GithubState>  
        </AlertState>             
      </LocalStorageState>    
    </Router>
  );
}

export default App;
