import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckOutButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JiC2VGDfeuEXf81DGMApVXMbrLbjK3prS6VmSsZK6EHcrbJocYmepb1NK3MKHYGROhKIkhfA8WSrh56zsXl1Ohf00vyobth9n';
    
    const onToken = token =>{
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
           .then(response=> {
               alert('PAYMENT SUCCESSFUL');
           }) 
           .catch(error=>{
            console.log('payment error: ', error);
            alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
            )
           })
        };


    return (
        <StripeCheckout
            label= 'PAY NOW'
            name= 'Asap Biggie Store'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            panelLabel='PAY NOW'
            stripeKey={publishableKey}
        />
    );
    };

    export default StripeCheckOutButton;