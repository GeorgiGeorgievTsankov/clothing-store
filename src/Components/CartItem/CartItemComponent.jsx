import React from 'react'

export const CartItemComponent = ({ cartItem }) => {
    const { name, quantity } = cartItem;
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}
