import { useContext } from 'react'

import { CategoriesContext } from "../../Contexts/ProductsContext"
import ProductCardComponent from '../../Components/ProductCard/ProductCardComponent'

import "../ShopPage/ShopPageStyle.css"



export const ShopPageComponent = () => {

    const { categoriesMap } = useContext(CategoriesContext)
    debugger
    
    return (
        <div>
          {Object.keys(categoriesMap).map((title) => (
            <div key={title}> 
              <h2>{title}</h2>
              <div className='products-container'>
                {categoriesMap[title].map((product) => (
                  <ProductCardComponent key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
}
