import React from 'react'
import { useContext } from 'react'
import './CheckoutStyle.css'
import { CartContext, addCartItem } from '../../Contexts/CartContext'



export const CheckoutComponent = () => {

    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);


    return (
      <div>
        <h1>Hi Checkout</h1>
        <div>
            {cartItems.map((cartItem) => {
                const { name, id, quantity } = cartItem;
                return(
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                    </div>
                )

            })}
        </div>
      </div>
    );

}
