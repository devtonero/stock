import CartAct from "./cart.types";

export const toggleCart = () => ({
    type: CartAct.TOGGLE_CART,
    
});

export const addItem = item => ({
    type: CartAct.ADD_ITEMS,
    payload: item
});

export const removeItem = item => ({
    type: CartAct.REMOVE_ITEM,
    payload: item
});

export const removeItemFromCart = item => ({
    type: CartAct.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart =() =>({
    type: CartAct.CLEAR_CART
})