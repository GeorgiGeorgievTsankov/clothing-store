import React from 'react'
import { useContext } from 'react'
import './CheckoutStyle.css'
import { CartContext, addCartItem } from '../../Contexts/CartContext'
import { CheckOutItemComponent } from '../../Components/CheckOut/CheckOutItemComponent'




export const CheckoutComponent = () => {

    const { cartItems, addItemToCart, removeItemToCart,cartTotalPrice} = useContext(CartContext);


    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

          
            {cartItems.map((cartItem) => {    
                return (
               <CheckOutItemComponent key={cartItem.id} cartItem={cartItem} />
                )
            })}
            <span className='Total'>Total: ${cartTotalPrice}</span>
        </div>
    );

};
