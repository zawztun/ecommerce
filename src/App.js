import React from 'react';
import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shopPage/ShopPage';
import SignInAndSignUp from './Pages/signInAndSignUp/SignInAndSignUp';
import {Route, Switch,Redirect} from 'react-router-dom';
import Header from './components/header/Header';
import { connect } from 'react-redux';
import {setCurrentUser} from './Redux/user/user.action'
import {auth,createUserProfileDocument} from './firebase/Firebase.utils';
import CheckoutPage from './Pages/checkoutPage/CheckOut';
import './App.scss';





class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

  this.unsubcribeFromAuth  = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot =>{
         setCurrentUser({              
                id: snapShot.id,
                ...snapShot.data()
            });
            });      
    }
    setCurrentUser(userAuth)
  });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
    
  render() {
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/shop' component = {ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp/>
              )
            }
          />
       
        </Switch>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>(
  {setCurrentUser: user => dispatch(setCurrentUser(user))}
)

export default connect(null, mapDispatchToProps)(App);

