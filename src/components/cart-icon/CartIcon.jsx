import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.action';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCounts} from '../../Redux/cart/cart.selectors'
import './cart-icon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) =>  ( 
    <div className = "cart-icon" onClick = {toggleCartHidden}>
        <ShoppingIcon className = "shopping-icon"/>
        <span className = "item-count">{itemCount}</span>     
     </div>
    )

 const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
});

 const mapStateToProps = state =>({
     itemCount: selectCartItemsCounts(state)
 })


export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)
