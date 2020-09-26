import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/GithubState';
import { LocalStorageState } from './context/localStorage/LocalStorageState';


function App() {

  return (  
    <LocalStorageState>
      <GithubState>      
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <div className="container pt-4">   
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/history" component={History} />
                <Route path="/profile/:name" component={Profile} />
              </Switch>
            </div>
          </BrowserRouter>
        </AlertState>             
      </GithubState>  
    </LocalStorageState>     
  );
}

export default App;
