
import { useContext} from 'react'

import { CategoriesContext } from "../../Contexts/ProductsContext"

import CategoryPreviewComponent from '../../Components/CategoryPreview/CategoryPreviewComponent'





export const CategoriesPreviewComponent = () => {

    const { categoriesMap } = useContext(CategoriesContext)
    
    
    return (
        <>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return < CategoryPreviewComponent key={title} title={title} products={products} />
          })}
           
        </>
       
      );
}
