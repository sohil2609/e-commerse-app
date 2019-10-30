import React from 'react';
import "./cart-icon.styles.scss";
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg';


const CartIcon = ({ toggleCartHidden, totalItems }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{totalItems}</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>  ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);