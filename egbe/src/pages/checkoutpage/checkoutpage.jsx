import React from 'react';



import StripeCheckOutButton from '../../components/stripe-button/stripe-button.components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.components';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';


const checkOutPage  = ({cartitems, totalprice}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>   
        {cartitems.map(cartitem => (
            <CheckoutItem key={cartitem.id} cartitem={cartitem} />
        ))}

            <TotalContainer> ${totalprice}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </WarningContainer>
            
            <StripeCheckOutButton price={totalprice}/>
            

       
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector ({
     cartitems: selectCartItems,
     totalprice: selectCartTotal
    })

export default connect(mapStateToProps)(checkOutPage);