import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-buttom/custom-button.components';
import { connect } from 'react-redux';

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.actions';

const SignIn = ({emailSignin, googleSignin})=> {
   const [userInfo, setUserInfo] = useState({  email:'', password:''});

   const {email,password} = userInfo;
    const handleSubmit = async event => {
        event.preventDefault();
        
        emailSignin(email, password);
              
    };

    const handleChange = (event) => {
        const {value, name} = event.target;
        setUserInfo({...userInfo, [name]:value})
    }

            return (
            
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name="email" 
                    type="email" 
                    handleChange={handleChange} 
                    label='Email'
                    value={email} required/>
                    
                    <FormInput name="password" 
                    type="password" 
                    handleChange={handleChange} 
                    label='Password'
                    value={password} 
                    required/>
                    <div className='buttons'>
                        <CustomButton  type='submit'>Sign in</CustomButton>
                        
                    
                        <CustomButton type='button' onClick={googleSignin} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>
                                                
                </form>
            </div>
        );
    
}

const mapDispatchToProps = dispatch => ({
    googleSignin: ()=> dispatch(googleSigninStart()),
    emailSignin: (email, password)=> dispatch(emailSigninStart({email, password}))
})
export default connect(null, mapDispatchToProps) (SignIn);