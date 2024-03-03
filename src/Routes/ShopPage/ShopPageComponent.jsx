import { useContext } from 'react'

import { ProductsContext } from "../../Contexts/ProductsContext"
import ProductCardComponent from '../../Components/ProductCard/ProductCardComponent'

import "../ShopPage/ShopPageStyle.css"



export const ShopPageComponent = () => {

   const {products} =  useContext(ProductsContext)
    return (
        <div className='products-container'>
            {products.map(product => (
            <ProductCardComponent key={product.id} product={ product }></ProductCardComponent>))}
        </div>
    )
}
