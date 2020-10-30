import React from 'react';
import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shopPage/ShopPage';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/Header'
import './App.scss';



class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/shop' component = {ShopPage}/>
        </Switch>

      </div>
    );
  }
}

export default App;
