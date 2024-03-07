import React from 'react';
import { CartItemComponent } from '../CartItem/CartItemComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';

import './CartDropdownStyle.css';

export const CartDropdownComponent = () => {

    const {cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItemComponent key={item.id} cartItem={item} />)}
            </div>

            <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
        </div>
    )

}
