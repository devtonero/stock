import UserActionTypes from "./user.types";


export const googleSigninStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});


export const emailSigninStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signinSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signinFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
   });


   //signOut Saga
export const signoutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signoutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signoutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

//signup saga
export const signupStart = (signupdetail) => ({
 type: UserActionTypes.SIGN_UP_START,
 payload: signupdetail
});

export const signupFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});
export const signupSuccess = ({user, additionalData}) =>({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})