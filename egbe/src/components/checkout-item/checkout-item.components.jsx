import React from "react";

import { removeItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import { ImageContainer,
     CheckOutItem,
     NamePriceContainer,
     ArrowContainer, 
     RemoveButton, 
     ValueContainer, 
     QuantityContainer
 } from "./checkout-item.styles";



const CheckoutItem = ({cartitem, addItem,  removeItem, reduceItem}) => {
    const  {name, quantity, price, imageUrl} = cartitem;
    return(
    <CheckOutItem >
        <ImageContainer className='image-container'>
            <img src={imageUrl} alt='item'/>
        </ImageContainer>
        <NamePriceContainer>{name}</NamePriceContainer>
        
        <QuantityContainer>
            <arrowContainer onClick={()=> reduceItem(cartitem)}>&#10094;</arrowContainer>
            <ValueContainer >{quantity}</ValueContainer>
            <ArrowContainer onClick={()=> addItem(cartitem)}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <NamePriceContainer > {price}</NamePriceContainer>
        <RemoveButton onClick={()=> removeItem(cartitem)}>&#10005;</RemoveButton>
    </CheckOutItem>
);};
const mapDisPatch = dispatch => ({
    removeItem: item  => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDisPatch)(CheckoutItem);