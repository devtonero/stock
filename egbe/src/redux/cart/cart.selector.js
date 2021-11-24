import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const cartHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)

export const selectCartItems = createSelector (
    [selectCart],
    cart=> cart.cartItems
);

export const selectCartItemCount = createSelector (
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedValue, cartItems)=> accumulatedValue + cartItems.quantity, 0)
);

export const selectCartTotal = createSelector (
    [selectCartItems],
    cartItems =>  
    cartItems.reduce(
        (accumulatedValue, cartItems)=> accumulatedValue + cartItems.quantity * cartItems.price, 0)
)
