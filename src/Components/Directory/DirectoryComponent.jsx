import React from 'react'
import { CategoryComponent } from '../CategoryItem/CategoryComponent'

export const DirectoryComponent = ({categories}) => {
  return (
    <div className="categories-container">
    {categories.map((category ) =>(
      <CategoryComponent key={category.id} category={category}/>
    ))}

  </div>
  )
}
