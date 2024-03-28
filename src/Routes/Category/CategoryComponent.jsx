import React from 'react'
import { useContext,useEffect,useState } from 'react';
import { CategoriesContext } from '../../Contexts/ProductsContext';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import "./CategoryStyle.css"
import ProductCardComponent from '../../Components/ProductCard/ProductCardComponent';

export const CategoryComponent = () => {

  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext)
 const [products, setProducts] = useState(categoriesMap[category]);

 useEffect(() => {
  setProducts(categoriesMap[category]);
 }, [categoriesMap, category])

  return (
  <div className='category-containers'>
     {products && products.map((product) => <ProductCardComponent key={product.id} product={product} />)}
  </div>
  )
}
