import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { cartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.components'

import { signoutStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux';

import { LogoContainer, HeaderContainer, OptionLink, OptionsContainer } from './header.styles';
const Header = ({currentUser, hidden, SignOutUser}) =>  ( 
    <HeaderContainer >
        <LogoContainer to="/">
            < Logo className='logo'/>
        </LogoContainer >

        <OptionsContainer >
            <OptionLink  to='/shop' >SHOPS</OptionLink>
            <OptionLink  to='/contact'> CONTACT</OptionLink>
            
            {currentUser? (
                <OptionLink as='div' div  onClick={SignOutUser}> SIGN OUT</OptionLink>
               )   : (
                <OptionLink  to='/signin' >SIGN IN</OptionLink>
               )}
            <CartIcon/>
        </OptionsContainer>
            {
                hidden? null:
                <CartDropdown/>
            }
            
        
       
    </HeaderContainer>
  
  
  
  
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartHidden

});

const mapDispatchToProps = dispatch => ({
    SignOutUser: ()=> dispatch(signoutStart())
    

});

export default connect(mapStateToProps, mapDispatchToProps) (Header);