import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-buttom/custom-button.components';
import { toggleCart } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.components';
import { connect } from 'react-redux';

import { withRouter } from 'react-router';


const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>

        { 
        cartItems.length ?
        (cartItems.map(cartIte => (
          <CartItem key={cartIte.id} item={cartIte} />
        )) )
        :
        (
        <span className='empty-message'>YOUR CART IS EMPTY</span>)
      
        }

      </div>
      <CustomButton onClick={()=> 
        {history.push('/Checkout');
      dispatch(toggleCart());}
      }>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
  });

export default withRouter(connect(mapStateToProps) (CartDropdown));