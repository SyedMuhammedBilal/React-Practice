import React from 'react';
import { BrowserRouter as Router,
Switch, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route';

import './App.css';
import Users from './user'

const User = ({match}) => {
  return( <h1>Hello {match.params.username}!</h1> )
}

function App() {
  return (
    <Router>
      <div className='App'>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about/" >About</Link>
        </li>
        <li>
          <Link to="/user/bilal" >bilal</Link>
        </li>
      </ul>

      <Route path="/" exact strict render= {
        () => {
          return( <h1>Hello React</h1> )
        }
      } />
      <Route path="/about/" exact strict render={
        () => {
          return( <Users /> )
        }
      } />
      <Route  path="/user/:username" exact strict component={User} />
      </div>
    </Router>
  );
}


export default App;
