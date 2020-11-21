import React from 'react';
import {connect} from 'react-redux'
import Custombutton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem'

import './cart-dropdown.scss';


const CartDropDown = ({cartItems}) => {
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">    
                {
                    cartItems.map(cartItem=>(
                        <CartItem key = {cartItem.id} item= {cartItem}/>
                    ))
                }        
                <Custombutton>GO TO CHECKOUT</Custombutton>
            </div>  
        </div>
    )
}
 const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps) (CartDropDown)
