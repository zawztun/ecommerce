import React from 'react';
import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shopPage/ShopPage';
import {Route, Switch} from 'react-router-dom'
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/shop' component = {ShopPage}/>
        </Switch>

      </div>
    );
  }
}

export default App;
