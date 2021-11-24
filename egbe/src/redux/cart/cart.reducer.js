import CartAct from "./cart.types";

import { addItemToCart } from "./cart.utilis";

import { reduceNumOfItemOnCart } from "./cart.utilis";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []

};
const cartReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type) {
        case CartAct.TOGGLE_CART:
            return{
                ...state,
                hidden: !state.hidden
            };

            case CartAct.ADD_ITEMS:
                return {
                    ...state,
                    cartItems: addItemToCart (state.cartItems, action.payload)
                };
            case CartAct.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: reduceNumOfItemOnCart(state.cartItems, action.payload)
                }

            case CartAct.CLEAR_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(cartitem => cartitem.id !== action.payload.id)
                }

            case CartAct.CLEAR_CART:
                return {
                    ...state,
                    cartItems: []
                }

             default: 
             return state;

            
    }

};
export default cartReducer;