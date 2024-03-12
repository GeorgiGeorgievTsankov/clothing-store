import React from 'react';
import { CartItemComponent } from '../CartItem/CartItemComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



import './CartDropdownStyle.css';

export const CartDropdownComponent = () => {
    
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const history = useHistory();

    const handleClick = () => {
        history.push('/checkout');
        setIsCartOpen(false);


    }

    const {cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItemComponent key={item.id} cartItem={item} />)}
            </div>

            <ButtonComponent onClick={handleClick}>GO TO CHECKOUT</ButtonComponent>
        </div>
    )

}
