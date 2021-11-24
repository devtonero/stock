import { takeLatest, put, all, call} from "redux-saga/effects";
import UserActionTypes from "./user.types";

import { signinFailure, signinSuccess, signoutFailure, signoutSuccess, signupSuccess, signupFailure } from "./user.actions";

import { auth, googleprovider, createUserProfileDocument, getUsersession } from "../../firebase/firebase";

export function* getSnapFromUser(UserData, additionalData) { 
    try{
    const userRef = yield call(createUserProfileDocument, UserData, additionalData);
        const userSnapshop = yield userRef.get();
        yield put (signinSuccess(
           {id: userSnapshop.id, ...userSnapshop.data() }) 
        );
    }catch (error){
        yield put(signinFailure(error));
    }

    
    
}

export function* googleSignin() {
    try{
        const {user} = yield auth.signInWithPopup(googleprovider);
        yield getSnapFromUser(user);
    }catch (error){
        yield put(signinFailure(error));
    }
}


export function* EmailSignin({payload: {email, password}}) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapFromUser(user);
        
    }catch (error){
        yield put(signinFailure(error));
    }
}

export function* authenticatedYes() {
    try{
       const userAuth = yield getUsersession();
       if (!userAuth) return;
        yield getSnapFromUser(userAuth);
        
    }catch (error){
     yield put(signinFailure(error));
    }
}

export function* signoutUser() {
    try{
      yield auth.signOut();
      yield put(signoutSuccess());
    }catch(error){
        yield put(signoutFailure(error));
    }
}

export function* signUpUser({payload: { email, password, displayName}}) {
    try{
   const {user} = yield auth.createUserWithEmailAndPassword(email,password);
            
    yield put(signupSuccess({user, additionalData:{displayName}}));

    }catch(error){
        yield put(signupFailure(error))
    }
};

export function* signinAfterSignup({payload:{user, additionalData} }) {
    yield getSnapFromUser(user, additionalData);
}

export function* onGoggleSignin() {
   
        yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignin)
   
};


export function* onEmailSignin() {
   
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, EmailSignin)

};

export function* onUserSession() {
   
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, authenticatedYes)

};


export function* onSignout() {
   
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signoutUser)

};


export function* onSignUp() {
   yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser)

};

export function* onSigninAfterSignup() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signinAfterSignup)
 
 };


export function* userSagas() {
    yield all([
        call(onGoggleSignin), 
        call(onEmailSignin),
        call(onSignout),
        call(onUserSession),
        call(onSignUp),
        call(onSigninAfterSignup)
        
    ]);
};