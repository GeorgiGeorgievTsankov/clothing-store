import React from 'react'
import SHOP_DATA from '../../shop-data.json';

export const ShopPageComponent = () => {

   
    return (
        <div>
            {SHOP_DATA.map(product => (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>))}
        </div>
    )
}
