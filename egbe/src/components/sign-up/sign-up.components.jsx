import React, {useState} from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-buttom/custom-button.components';


import { connect } from 'react-redux';
import { signupStart} from '../../redux/user/user.actions';

const SignUp = ({signupuser}) => {
    const [userdete, setuserdete]  = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''})   
     const {email, displayName, password, confirmPassword}= userdete;   
     const handeleSubmit = async event => {
            event.preventDefault();
      
            if(password !== confirmPassword){
                alert("Password Don't Match");
                return;
            }
            signupuser({email, displayName, password});

        }

     const  handleChange = event =>{
            const {name, value}= event.target;
            setuserdete({...userdete, [name]: value})
        };


            return(
                <div className='sign-up'>
                    <h2>I DO NOT HAVE AN ACCOUNT</h2>
                    <span>SIGN UP WITH YOUR EMAIL AND PASSWORD</span>
                    <form className='sign-up-form' onSubmit={handeleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            onChange={handleChange}
                            label='Display Name'
                            required
                            
                        />
                        

                        <FormInput
                            type='text'
                            name='email'
                            value={email}
                            onChange={handleChange}
                            label='Email'
                            required
                            
                        />
                        
                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                            label='Password'
                            required
                            
                        />
                    

                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleChange}
                            label='Confirm Password'
                            required
                            
                        />
                        
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </form>

                </div>
            )
        
}

const mapDispatchToProps = dispatch =>( {
    signupuser: (signupdetail) => dispatch(signupStart(signupdetail))
})
export default connect(null, mapDispatchToProps)(SignUp);