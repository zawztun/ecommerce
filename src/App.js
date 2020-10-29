import React from 'react';
import HomePage from './Pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom'
import './App.css';

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/hats' component = {HatsPage}/>
        </Switch>

      </div>
    );
  }
}

export default App;
