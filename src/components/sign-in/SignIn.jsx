

import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/Firebase.utils'
import './signIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'', 
             password: '' 
        }
    };

    handleSubmit = async event =>{
        event.preventDefault()

        const {email,password} = this.state;
        
            try{ 
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
            }catch(error){
            console.log(error)
            }
    };
    
    handleChange = event =>{
        const {value, name} = event.target;
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
                        <div className = "buttons">
                            <CustomButton type= 'submit'> SIGN IN</CustomButton>
                            <CustomButton  onClick= {signInWithGoogle} isGoogleSignIn> SIGN IN WIHT GOOGLE</CustomButton>

                        </div>
                </form>
            </div>
        )
    }
}

export default SignIn





