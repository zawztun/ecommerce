import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/Firebase.utils'
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.scss';

const Header = ({currentUser}) => {
    return (
        <div className = "header">
            <Link className = "cogo-container" to = "/">
                <Logo className  = "logo"/>
            </Link>
            <div className = "options">
                <Link className = "option" to = "/shop">
                    Shop
                </Link>
                <Link className = "option" to = "/shop">
                    Contact
                </Link>
                    {
                        currentUser ?(
                        <div className = "option" onClick = {()=>auth.signOut()}>SIGN OUT</div>
                        ) : (
                        <Link Link classNaem = "option" to = "/signin"> SIGN IN</Link>)
                    }
            </div>
        </div>
    )
}

export default Header
