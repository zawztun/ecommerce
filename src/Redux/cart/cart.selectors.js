import {createSelector} from 'reselect';
 
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const selectCartItemsCounts = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acuqtt, cartItem) =>
    acuqtt + cartItem.quantity, 0
));

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acuqtt, cartItem) =>
    acuqtt + cartItem.quantity * cartItem.price , 0
    )
);