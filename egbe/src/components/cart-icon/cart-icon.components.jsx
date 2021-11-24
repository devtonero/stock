import React from 'react';

import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCart, itemNum}) => (
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemNum}</span>
        
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
  });

const mapStateToProps = createStructuredSelector ({
itemNum: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);