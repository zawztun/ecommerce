

import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-buttom/CustomButton';
import {signInWithGoogle} from '../../firebase/Firebase.utils'
import './signin.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'', 
             password: '' 
        }
    };
    handleSubmit = (e)=>{
    e.preventDefault()
    this.setState({email:'', password:''})
    }
    
    handleChange = e =>{
        const {value, name} = e.target;
        this.setState({[name] : value})
    }

    render() {
        return (
            <div className = "sign-in">
                <h2> I already have an Account</h2>
                <span>Sign in with your Email and Password</span>

                <form onSubmit = {this.handleSubmit}>
                    
                    <FormInput name= "email" 
                        type= "email" 
                        value= {this.state.email}       
                        onChange = {this.handleChange}
                        label = 'email'
                        required />
                    <FormInput name= "password" 
                        type= "password" 
                        value= {this.state.password}       
                        onChange = {this.handleChange}
                        label = 'password'
                        required />
                        <div className = "button">
                            <CustomButton type= 'submit'> SIGN IN</CustomButton>
                            <CustomButton onClick= {signInWithGoogle} isGoogleSignIn> SIGN IN WIHT GOOGLE</CustomButton>

                        </div>
                </form>
            </div>
        )
    }
}

export default SignIn



