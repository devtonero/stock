import React, {useEffect, lazy, Suspense} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import { GlobalStyle } from './global.styles';


import Header from './components/header/header.components';
import SignInandSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import checkOutPage from './pages/checkoutpage/checkoutpage';




import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.components'));

const App =({usersession, currentUser}) => {

 useEffect(()=> {
  usersession();
 },[usersession]);

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
      <Suspense fallback={<div>...loading</div>}>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  exact path='/signin' render ={()=>
          currentUser ? (<Redirect to='/'/>): (<SignInandSignOut/>) } />
        <Route  exact path ='/checkout' component={checkOutPage}/>
      </Suspense>
      </Switch> 
    
      
    </div>
  );

 
 
  
} 

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser

})

const mapDispatchToProps = dispatch => ({
  usersession: ()=> dispatch(checkUserSession())

})

export default connect(mapStateToProps, mapDispatchToProps) (App);
