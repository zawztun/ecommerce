import React from 'react';
import Custombutton from '../custom-button/CustomButton';
import './cart-dropdown.scss';

const CartDropDown = () => {
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">            
                <Custombutton>GO TO CHECKOUT</Custombutton>
            </div>  
        </div>
    )
}

export default CartDropDown
