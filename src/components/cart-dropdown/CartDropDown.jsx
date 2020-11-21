import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import Custombutton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import { toggleCartHidden } from '../../Redux/cart/cart.action.js';


import './cart-dropdown.scss';


const CartDropDown = ({cartItems,history,dispatch}) => {
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">    
                { cartItems.length ?( 
                    cartItems.map(cartItem=>(
                        <CartItem key = {cartItem.id} item= {cartItem}/>
                    ))) :(
                        <span className = 'empty-message'> Your cart is Empty</span>
                    )
                }  
              </div>       
                <Custombutton 
                onClick = {() => {
                    history.push('./checkout');
                    dispatch(toggleCartHidden()); 
                }}
                >GO TO CHECKOUT</Custombutton>
           
        </div>
    )
}
 const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropDown));
