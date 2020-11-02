import React from 'react';
import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shopPage/ShopPage';
import SignInAndSignUp from './Pages/signInAndSignUp/SignInAndSignUp';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import {auth,createUserProfileDocument} from './firebase/Firebase.utils'
import './App.scss';




class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    };
  }
  
  unsubcribeFromAuth = null;

  componentDidMount(){
  this.unsubcribeFromAuth  = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot =>{
            this.setState ({
              currentUser:{
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            ()=>{
              console.log(this.state)
            }
            )
            });
           
    }
    this.setState({currentUser: userAuth})
  });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
    
  render() {
    return (
      <div className='App'>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/shop' component = {ShopPage}/>
            <Route  path = '/signin' component = {SignInAndSignUp}/>
        </Switch>

      </div>
    );
  }
}

export default App;
