import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import {addCollectionsAndDocuments} from '../Utils/Firebase/Firebase.utils.js'

export const ProductsContext = createContext({
    products : [],
})

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
 
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}
