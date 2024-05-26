import React from 'react'
import './CartItemStyle.css'

export const CartItemComponent = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt="product" />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}
