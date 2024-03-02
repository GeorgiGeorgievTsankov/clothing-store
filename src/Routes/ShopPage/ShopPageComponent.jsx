import { useContext } from 'react'

import { ProductsContext } from "../../Contexts/ProductsContext"


export const ShopPageComponent = () => {

   const {products} =  useContext(ProductsContext)
    return (
        <div>
            {products.map(product => (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <img src={product.imageUrl} alt="image" />
            </div>))}
        </div>
    )
}
