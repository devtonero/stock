import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.components';

const SignInandSignOut = () => (
    <div className='sign-in-and-sign-up '>
        <SignIn />
        <SignUp />
    
    </div>
);

export default SignInandSignOut;